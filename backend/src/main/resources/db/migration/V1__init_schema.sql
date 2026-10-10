-- =========================================================
-- SP-30 Blue Companion — Prototype Schema (Flyway V1)
-- PostgreSQL 15+ with PostGIS
-- Place at: src/main/resources/db/migration/V1__init_schema.sql
--
-- Scope: screens in the Canva mockup (Login/Sign Up, Home, Map,
-- Events, Dining, Shuttle, Profile).
-- Deferred to a later migration (V2+): QR check-ins, social feed,
-- lost & found, indoor navigation, beacons/NFC.
-- =========================================================

CREATE EXTENSION IF NOT EXISTS postgis;

-- ---------------------------------------------------------
-- USERS
-- ---------------------------------------------------------
CREATE TABLE users (
    id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    email           VARCHAR(255) NOT NULL UNIQUE,   -- KSU email, validated in the signup DTO
    full_name       VARCHAR(255) NOT NULL,
    password_hash   VARCHAR(255) NOT NULL,          -- BCrypt hash, never plaintext
    role            VARCHAR(20)  NOT NULL DEFAULT 'student', -- student, organizer, admin
    created_at      TIMESTAMPTZ  NOT NULL DEFAULT now(),
    updated_at      TIMESTAMPTZ  NOT NULL DEFAULT now(),
    CONSTRAINT chk_users_role CHECK (role IN ('student', 'organizer', 'admin'))
);

-- ---------------------------------------------------------
-- BUILDINGS (Map screen, "Tapping a building" screen)
-- ---------------------------------------------------------
CREATE TABLE buildings (
    id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name            VARCHAR(255) NOT NULL,          -- e.g. "Atrium Building J"
    code            VARCHAR(20),                    -- e.g. "J"
    address         VARCHAR(500),                   -- shown under the building name
    description     TEXT,
    category        VARCHAR(30)  NOT NULL DEFAULT 'building', -- building, dining, other (map filter chips)
    image_url       VARCHAR(500),
    floors          INT          NOT NULL DEFAULT 1,
    geom            GEOGRAPHY(POLYGON, 4326),       -- building footprint (optional for prototype)
    entrance_point  GEOGRAPHY(POINT, 4326),         -- map marker + routing target
    created_at      TIMESTAMPTZ  NOT NULL DEFAULT now(),
    CONSTRAINT chk_buildings_category CHECK (category IN ('building', 'dining', 'other'))
);
CREATE INDEX idx_buildings_entrance ON buildings USING GIST (entrance_point);
CREATE INDEX idx_buildings_geom     ON buildings USING GIST (geom);
CREATE INDEX idx_buildings_name     ON buildings (lower(name));

-- "Building Information" list (Dining, WiFi Services, Study Areas, Lecture Rooms...)
CREATE TABLE building_info_items (
    id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    building_id     UUID NOT NULL REFERENCES buildings(id) ON DELETE CASCADE,
    label           VARCHAR(255) NOT NULL,
    sort_order      INT NOT NULL DEFAULT 0
);
CREATE INDEX idx_building_info_building ON building_info_items (building_id);

-- ---------------------------------------------------------
-- EVENTS, RSVPs, SAVED EVENTS, REMINDERS
-- ---------------------------------------------------------
CREATE TABLE events (
    id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title           VARCHAR(255) NOT NULL,
    description     TEXT,
    category        VARCHAR(50),
    image_url       VARCHAR(500),
    building_id     UUID REFERENCES buildings(id) ON DELETE SET NULL,
    location_note   VARCHAR(255),                   -- e.g. "Room 204" when no building link
    starts_at       TIMESTAMPTZ NOT NULL,
    ends_at         TIMESTAMPTZ,
    organizer_id    UUID REFERENCES users(id) ON DELETE SET NULL,
    status          VARCHAR(20) NOT NULL DEFAULT 'active', -- active, cancelled (SRS: cancel events)
    source          VARCHAR(30) NOT NULL DEFAULT 'internal', -- internal, eventbrite (optional)
    external_id     VARCHAR(255),                   -- Eventbrite ID if imported
    created_at      TIMESTAMPTZ NOT NULL DEFAULT now(),
    updated_at      TIMESTAMPTZ NOT NULL DEFAULT now(),
    CONSTRAINT chk_events_status CHECK (status IN ('active', 'cancelled')),
    CONSTRAINT chk_events_times  CHECK (ends_at IS NULL OR ends_at >= starts_at)
);
CREATE INDEX idx_events_starts_at ON events (starts_at);
CREATE INDEX idx_events_building  ON events (building_id);
CREATE UNIQUE INDEX uq_events_external ON events (source, external_id) WHERE external_id IS NOT NULL;

CREATE TABLE rsvps (
    id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    event_id        UUID NOT NULL REFERENCES events(id) ON DELETE CASCADE,
    user_id         UUID NOT NULL REFERENCES users(id)  ON DELETE CASCADE,
    status          VARCHAR(20) NOT NULL DEFAULT 'going', -- going, interested, cancelled
    created_at      TIMESTAMPTZ NOT NULL DEFAULT now(),
    UNIQUE (event_id, user_id),
    CONSTRAINT chk_rsvps_status CHECK (status IN ('going', 'interested', 'cancelled'))
);
CREATE INDEX idx_rsvps_event_status ON rsvps (event_id, status);
CREATE INDEX idx_rsvps_user         ON rsvps (user_id);

-- Bookmarked events (Home "Saved Events", Profile > Saved Events). Separate from RSVP.
CREATE TABLE saved_events (
    user_id         UUID NOT NULL REFERENCES users(id)  ON DELETE CASCADE,
    event_id        UUID NOT NULL REFERENCES events(id) ON DELETE CASCADE,
    saved_at        TIMESTAMPTZ NOT NULL DEFAULT now(),
    PRIMARY KEY (user_id, event_id)
);

-- Scheduled reminders (what the job runner polls)
CREATE TABLE reminders (
    id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    event_id        UUID NOT NULL REFERENCES events(id) ON DELETE CASCADE,
    user_id         UUID NOT NULL REFERENCES users(id)  ON DELETE CASCADE,
    remind_at       TIMESTAMPTZ NOT NULL,
    sent            BOOLEAN NOT NULL DEFAULT false,
    UNIQUE (event_id, user_id, remind_at)
);
CREATE INDEX idx_reminders_due ON reminders (remind_at) WHERE sent = false;

-- ---------------------------------------------------------
-- PROFILE: FAVORITE LOCATIONS, NOTIFICATIONS
-- ---------------------------------------------------------
CREATE TABLE favorite_locations (
    user_id         UUID NOT NULL REFERENCES users(id)     ON DELETE CASCADE,
    building_id     UUID NOT NULL REFERENCES buildings(id) ON DELETE CASCADE,
    created_at      TIMESTAMPTZ NOT NULL DEFAULT now(),
    PRIMARY KEY (user_id, building_id)
);

-- Delivered notifications (Home bell, Profile > Notifications)
CREATE TABLE notifications (
    id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id         UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    event_id        UUID REFERENCES events(id) ON DELETE SET NULL,
    title           VARCHAR(255) NOT NULL,
    body            TEXT,
    is_read         BOOLEAN NOT NULL DEFAULT false,
    created_at      TIMESTAMPTZ NOT NULL DEFAULT now()
);
CREATE INDEX idx_notifications_user ON notifications (user_id, is_read, created_at DESC);

-- ---------------------------------------------------------
-- DINING (Dining screen)
-- ---------------------------------------------------------
CREATE TABLE dining_locations (
    id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name            VARCHAR(255) NOT NULL,          -- e.g. "Stingers Dining Hall"
    building_id     UUID REFERENCES buildings(id) ON DELETE SET NULL,
    location        GEOGRAPHY(POINT, 4326),         -- used for "how far from me"
    image_url       VARCHAR(500),
    hours           JSONB,                          -- e.g. {"mon": [["11:30","14:20"]], ...}
    created_at      TIMESTAMPTZ NOT NULL DEFAULT now()
);
CREATE INDEX idx_dining_location ON dining_locations USING GIST (location);

CREATE TABLE dining_menu_items (
    id                  UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    dining_location_id  UUID NOT NULL REFERENCES dining_locations(id) ON DELETE CASCADE,
    name                VARCHAR(255) NOT NULL,
    category            VARCHAR(50),
    dietary_tags        TEXT[],
    available_date      DATE NOT NULL,
    meal_period         VARCHAR(20)                 -- breakfast, lunch, dinner
);
CREATE INDEX idx_menu_location_date ON dining_menu_items (dining_location_id, available_date);

-- ---------------------------------------------------------
-- SHUTTLE (Shuttle screen: Routes tab, Live Tracking tab, route schedule)
-- ---------------------------------------------------------
CREATE TABLE shuttle_routes (
    id                UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name              VARCHAR(255) NOT NULL,        -- e.g. "Marietta Loop Route"
    operating_hours   VARCHAR(255),                 -- display text: "Mon - Fri 7:00 AM - 6:00 PM"
    path              GEOGRAPHY(LINESTRING, 4326),
    active            BOOLEAN NOT NULL DEFAULT true
);

CREATE TABLE shuttle_stops (
    id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    route_id        UUID NOT NULL REFERENCES shuttle_routes(id) ON DELETE CASCADE,
    name            VARCHAR(255) NOT NULL,
    location        GEOGRAPHY(POINT, 4326) NOT NULL,
    sequence_order  INT NOT NULL,
    UNIQUE (route_id, sequence_order)
);

-- Scheduled stop times, used for the route detail view and "next arrival"
CREATE TABLE shuttle_schedule_entries (
    id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    stop_id         UUID NOT NULL REFERENCES shuttle_stops(id) ON DELETE CASCADE,
    day_type        VARCHAR(20) NOT NULL DEFAULT 'weekday', -- weekday, weekend
    arrival_time    TIME NOT NULL
);
CREATE INDEX idx_schedule_stop_time ON shuttle_schedule_entries (stop_id, day_type, arrival_time);

-- Live vehicle positions. Write-heavy: keep rows short-lived (prune old data),
-- or cache the latest position per vehicle in memory/Redis.
CREATE TABLE shuttle_live_positions (
    id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    route_id        UUID NOT NULL REFERENCES shuttle_routes(id) ON DELETE CASCADE,
    vehicle_label   VARCHAR(50),
    location        GEOGRAPHY(POINT, 4326) NOT NULL,
    heading_deg     DOUBLE PRECISION,
    recorded_at     TIMESTAMPTZ NOT NULL DEFAULT now()
);
CREATE INDEX idx_shuttle_positions_route_time ON shuttle_live_positions (route_id, recorded_at DESC);
