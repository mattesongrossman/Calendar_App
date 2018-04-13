\c calendar_db

INSERT INTO users
  (username, password, session_id)
VALUES
  ('RBorg', 'hi27', 'supersession');

INSERT INTO events
  (user_id, event_name, event_time, event_description, event_type)
VALUES
  (1, 'RParty', '2012-04-01', 'byob', 'party'),
  (1, 'Project 3 due!', '2018-04-16 09:00:00-00', 'Everything for project 3 and presentations due', 'HW'),
  (1, 'Bagels', '2018-04-13', 'Matteson''s bringing in bagels!', 'Food'),
  (1, 'Watch Isle of Dogs', '2017-05-13 18:00:00-00', 'Isle of Dogs at Cobble Hill Cinemas', 'Movie');
