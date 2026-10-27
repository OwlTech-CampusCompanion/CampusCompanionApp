-- Floor count corrections
UPDATE buildings SET floors = 2 WHERE code = 'A';
UPDATE buildings SET floors = 2 WHERE code = 'D';
UPDATE buildings SET floors = 3 WHERE code = 'J';
UPDATE buildings SET floors = 1 WHERE code = 'M';
UPDATE buildings SET floors = 4 WHERE code = 'N';
UPDATE buildings SET floors = 2 WHERE code = 'X';
UPDATE buildings SET floors = 1 WHERE code = 'B';
UPDATE buildings SET floors = 1 WHERE code = 'S1';

-- Additional buildings (floor counts are guesses, correct them if you know them)
INSERT INTO buildings (name, code, address, description, category, floors, latitude, longitude, entrance_point) VALUES
('Design Building 1', 'I1', '1100 South Marietta Pkwy, Marietta, GA 30060', 'Design studios and classrooms.', 'building', 2, 33.93807783585761, -84.52113772234874, ST_SetSRID(ST_MakePoint(-84.52113772234874, 33.93807783585761), 4326)::geography),
('Design Building 2', 'I2', '1100 South Marietta Pkwy, Marietta, GA 30060', 'Design studios and classrooms.', 'building', 2, 33.9377981584492, -84.52112290451117, ST_SetSRID(ST_MakePoint(-84.52112290451117, 33.9377981584492), 4326)::geography),
('Science Lab Annex', 'SLA', '1100 South Marietta Pkwy, Marietta, GA 30060', 'Science labs and research space.', 'building', 2, 33.93869250825622, -84.5217082091206, ST_SetSRID(ST_MakePoint(-84.5217082091206, 33.93869250825622), 4326)::geography),
('Crawford Lab Building', 'E', '1100 South Marietta Pkwy, Marietta, GA 30060', 'Teaching and research labs.', 'building', 2, 33.93902750284297, -84.52162671101395, ST_SetSRID(ST_MakePoint(-84.52162671101395, 33.93902750284297), 4326)::geography),
('Student Competition Team Building', 'O', '1100 South Marietta Pkwy, Marietta, GA 30060', 'Workspace for student competition teams.', 'building', 1, 33.93523491827164, -84.52071541396977, ST_SetSRID(ST_MakePoint(-84.52071541396977, 33.93523491827164), 4326)::geography);