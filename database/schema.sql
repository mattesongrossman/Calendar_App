CREATE DATABASE calendar_db;

\c calendar_db;
DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS events;

CREATE TABLE users(
user_id BIGSERIAL PRIMARY KEY,
username VARCHAR(255),
password VARCHAR(255),
session_id VARCHAR(255)
);

CREATE TABLE events(
event_id BIGSERIAL PRIMARY KEY,
user_id INTEGER REFERERNCES users(user_id),
event_name VARCHAR(255),
event_time TIMESTAMPTZ,
event_description VARCHAR(255),
event_type VARCHAR(255),
);
