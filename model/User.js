const db = require('../database/db-connection');

const User = {};


// Might have to incorporate session_id at somepoint
User.create = (newUsername, hashedPassword) => {
  return db.one(`
    INSERT INTO users (username, password)
    VALUES ($1, $2)
    RETURNING id`,
    [newUsername, hashedPassword]
  )
}

User.find = enteredUsername => {
  return db.one(`
    SELECT *
    FROM users
    WHERE username = $1`,
    [enteredUsername]
  )
}


module.exports = User;
