\c calendar_db

INSERT INTO users
  (user_id, username, password, session_id)
VALUES
  ('RBorg', 'hi27', 'supersession');

INSERT INTO events
  (event_id, user_id, event_name, event_time, event_description, event_type)
VALUES
  (1, 'RParty', '2012-04-01 00:00:00-00', 'byob', party);
