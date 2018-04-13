const db = require("../database/db-connection")

const Event = {}


// Will add user/session id part later
Event.getAll = () => {
  return db.any(`
    SELECT *
    FROM events`
  )
}

Event.findById = id => {
  return db.one(`
    SELECT *
    FROM events
    WHERE id = $1`,
    [id]
  )
}

Event.create = newEvent => {
  return db.one(`
    INSERT INTO events (event_name, event_time, event_description, event_type)
    VALUES ($1, $2, $3, $4)
    RETURNING id`,
    [
      newEvent.name,
      newEvent.time,
      newEvent.description,
      newEvent.type
    ]
  )
}

Event.update = event => {
  return db.none(`
    UPDATE events
    SET event_name = $1, event_time = $2, event_description = $3, event_type = $4
    WHERE id = $5`,
    [
      event.name,
      event.time,
      event.description,
      event.type
    ]
  )
}

Event.delete = id => {
  return db.result(`
    DELETE FROM events
    WHERE id = $1`,
    [id]
  )
}


module.exports = Event
