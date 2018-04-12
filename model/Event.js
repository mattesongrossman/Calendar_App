const db = require("../database/db-connection")

const Event = {}

Event.getAll = () => {
  return db.any("SELECT * FROM events")
}

Event.findById = id => {
  return db.one("SELECT * FROM events WHERE id = $1", [id])
}

Event.create = newEvent => {
  return db.one(
    "INSERT INTO events(name, date, description, type) VALUES($1, $2, $3, $4) RETURNING id",
    [
      newEvent.event_name,
      newEvent.event_time,
      newEvent.event_description,
      newEvent.event_type
    ]
  )
}

Event.update = event => {
  return db.none(
    "UPDATE events SET name = $1, time = $2, description = $3, type = $4 WHERE id = $5",
    [
      event.eventsName,
      event.events_time,
      event.event_description,
      event.event_type
    ]
  )
}

Event.delete = id => {
  return db.result("DELETE FROM events WHERE id = $1", [id])
}

module.exports = Event
