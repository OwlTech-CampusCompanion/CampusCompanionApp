package com.CampusCompanion.backend.model;

import jakarta.persistence.*;
import java.io.Serializable;
import java.util.Objects;
import java.util.UUID;

@Entity
@Table(name = "saved_events")
@IdClass(SavedEvent.Key.class)
public class SavedEvent {
    @Id
    @Column(name = "user_id")
    private UUID userId;
    @Id
    @Column(name = "event_id")
    private UUID eventId;

    public SavedEvent() {}
    public SavedEvent(UUID userId, UUID eventId) { this.userId = userId; this.eventId = eventId; }

    public UUID getUserId() { return userId; }
    public UUID getEventId() { return eventId; }

    public static class Key implements Serializable {
        private UUID userId;
        private UUID eventId;

        public Key() {}
        public Key(UUID userId, UUID eventId) { this.userId = userId; this.eventId = eventId; }

        @Override public boolean equals(Object o) {
            return o instanceof Key k && Objects.equals(userId, k.userId) && Objects.equals(eventId, k.eventId);
        }
        @Override public int hashCode() { return Objects.hash(userId, eventId); }
    }
}