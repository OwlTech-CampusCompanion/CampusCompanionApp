-- Simple lat/lng columns for the prototype (entrance_point stays for PostGIS distance queries later)
ALTER TABLE buildings ADD COLUMN latitude DOUBLE PRECISION;
ALTER TABLE buildings ADD COLUMN longitude DOUBLE PRECISION;

-- KSU Marietta buildings (coordinates from Google Maps; floor counts are approximate)
INSERT INTO buildings (name, code, address, description, category, floors, latitude, longitude, entrance_point) VALUES
('Joe Mack Wilson Student Center', 'A', '1100 South Marietta Pkwy, Marietta, GA 30060', 'Student services, bookstore, dining options and event space.', 'building', 3, 33.94048690781233, -84.520548353695, ST_SetSRID(ST_MakePoint(-84.520548353695, 33.94048690781233), 4326)::geography),
('Atrium Building', 'J', '1100 South Marietta Pkwy, Marietta, GA 30060', 'Classrooms, labs and study areas.', 'building', 4, 33.93754958162722, -84.52022648862632, ST_SetSRID(ST_MakePoint(-84.52022648862632, 33.93754958162722), 4326)::geography),
('Lawrence V. Johnson Library', 'C', '1100 South Marietta Pkwy, Marietta, GA 30060', 'Study rooms, computers and quiet floors.', 'building', 3, 33.939303088540655, -84.52012992910572, ST_SetSRID(ST_MakePoint(-84.52012992910572, 33.939303088540655), 4326)::geography),
('Mathematics Building', 'D', '1100 South Marietta Pkwy, Marietta, GA 30060', 'Math classrooms and faculty offices.', 'building', 3, 33.93978373895166, -84.52083803225682, ST_SetSRID(ST_MakePoint(-84.52083803225682, 33.93978373895166), 4326)::geography),
('Academic Building', 'H', '1100 South Marietta Pkwy, Marietta, GA 30060', 'General classrooms and lecture rooms.', 'building', 3, 33.93859100886988, -84.52111698198301, ST_SetSRID(ST_MakePoint(-84.52111698198301, 33.93859100886988), 4326)::geography),
('Administration Building', 'B', '1100 South Marietta Pkwy, Marietta, GA 30060', 'Administrative and student support offices.', 'building', 2, 33.93957011688178, -84.51958275848897, ST_SetSRID(ST_MakePoint(-84.51958275848897, 33.93957011688178), 4326)::geography),
('Engineering Technology Center', 'Q', '1100 South Marietta Pkwy, Marietta, GA 30060', 'Engineering classrooms and labs.', 'building', 3, 33.93839518591634, -84.52232934040838, ST_SetSRID(ST_MakePoint(-84.52232934040838, 33.93839518591634), 4326)::geography),
('Wellness Center', 'S1', '1100 South Marietta Pkwy, Marietta, GA 30060', 'Fitness, recreation and wellness programs.', 'building', 2, 33.94127017768002, -84.51758719506311, ST_SetSRID(ST_MakePoint(-84.51758719506311, 33.94127017768002), 4326)::geography),
('Stingers Dining Hall', 'X', '1100 South Marietta Pkwy, Marietta, GA 30060', 'Main campus dining hall.', 'dining', 1, 33.93731815162119, -84.52216840787405, ST_SetSRID(ST_MakePoint(-84.52216840787405, 33.93731815162119), 4326)::geography),
('W. Clair Harris Textile Center', 'M', '1100 South Marietta Pkwy, Marietta, GA 30060', 'Textile and design studios.', 'building', 2, 33.936908696992646, -84.51971150451644, ST_SetSRID(ST_MakePoint(-84.51971150451644, 33.936908696992646), 4326)::geography),
('Civil Engineering Technology Building', 'L', '1100 South Marietta Pkwy, Marietta, GA 30060', 'Civil and environmental engineering classrooms and labs.', 'building', 3, 33.93576933462042, -84.52047325184564, ST_SetSRID(ST_MakePoint(-84.52047325184564, 33.93576933462042), 4326)::geography),
('Architecture Building', 'N', '1100 South Marietta Pkwy, Marietta, GA 30060', 'Architecture and construction studios.', 'building', 3, 33.93638352404328, -84.51869226513226, ST_SetSRID(ST_MakePoint(-84.51869226513226, 33.93638352404328), 4326)::geography),
('Event Center', 'S2', '1100 South Marietta Pkwy, Marietta, GA 30060', 'Large campus events and gatherings.', 'building', 2, 33.935813841249214, -84.51826311170736, ST_SetSRID(ST_MakePoint(-84.51826311170736, 33.935813841249214), 4326)::geography);

INSERT INTO building_info_items (building_id, label, sort_order)
SELECT id, label, sort_order FROM buildings,
  (VALUES ('Study Areas', 1), ('WiFi Services', 2), ('Lecture Rooms', 3)) AS x(label, sort_order)
WHERE code IN ('J', 'C', 'D', 'H', 'Q');

INSERT INTO building_info_items (building_id, label, sort_order)
SELECT id, label, sort_order FROM buildings,
  (VALUES ('Dining', 1), ('WiFi Services', 2)) AS x(label, sort_order)
WHERE code IN ('A', 'X');

-- Sample events relative to today
INSERT INTO events (title, description, category, building_id, starts_at, ends_at)
SELECT 'Welcome Back Mixer', 'Meet other students and campus clubs.', 'social', id,
       now() + interval '2 days', now() + interval '2 days 2 hours' FROM buildings WHERE code = 'A';
INSERT INTO events (title, description, category, building_id, starts_at, ends_at)
SELECT 'Resume Workshop', 'Career services helps with resumes.', 'career', id,
       now() + interval '4 days', now() + interval '4 days 1 hour' FROM buildings WHERE code = 'J';
INSERT INTO events (title, description, category, building_id, starts_at, ends_at)
SELECT 'Study Skills Session', 'Tips for finals prep.', 'academic', id,
       now() + interval '6 days', now() + interval '6 days 1 hour' FROM buildings WHERE code = 'C';
INSERT INTO events (title, description, category, building_id, starts_at, ends_at)
SELECT 'Engineering Open House', 'Tour the labs and meet faculty.', 'academic', id,
       now() + interval '9 days', now() + interval '9 days 3 hours' FROM buildings WHERE code = 'Q';
INSERT INTO events (title, description, category, building_id, starts_at, ends_at)
SELECT 'Campus Fall Festival', 'Games, food and live music.', 'social', id,
       now() + interval '12 days', now() + interval '12 days 4 hours' FROM buildings WHERE code = 'S2';