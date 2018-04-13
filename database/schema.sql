CREATE DATABASE calendar_db;

\c calendar_db;
DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS events CASCADE;


CREATE TABLE users(
id BIGSERIAL PRIMARY KEY,
username VARCHAR(255) UNIQUE NOT NULL
password VARCHAR(255),
session_id VARCHAR(255)
);

CREATE TABLE events(
id BIGSERIAL PRIMARY KEY,
user INTEGER REFERENCES users(id),
event_name VARCHAR(255),
event_time TIMESTAMPTZ,
event_description TEXT,
event_type VARCHAR(255)
);

 -- psql -f ./database/schema.sql
 -- psql -f ./database/seed.sql

