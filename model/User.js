const db = require("../database/db-connection")
const bcrypt = require("bcryptjs")
const User = {}

// Might have to incorporate session_id at somepoint
User.create = (newUsername, hashedPassword) => {
  const hash = bcrypt.hasSync(hashedPassword, 10)
  return db.one(
    `
    INSERT INTO users (username, password)
    VALUES ($1, $2)
    RETURNING id`,
    [newUsername, hash]
  )
}

User.find = enteredUsername => {
  return db.one(
    `
    SELECT *
    FROM users
    WHERE username = $1`,
    [enteredUsername]
  )
}

module.exports = User
