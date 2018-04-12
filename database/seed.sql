\c calendar_db

INSERT INTO users
  (username, password, session_id)
VALUES
  ('RBorg', 'hi27', 'supersession');
 -- psql -f ./database/schema.sql
 -- psql -f ./database/seed.sql
INSERT INTO events
  (user_id, event_name, event_time, event_description, event_type)
VALUES
  (1, 'RParty', '2012-04-01 00:00:00-00', 'byob', 'party');
