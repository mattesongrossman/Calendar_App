const promise = require("bluebird")
const monitor = require("pg-monitor")

promise.config({
  longStackTraces: true // WARNING: Do not set this option in production!
})

const initOptions = {
  promiseLib: promise
}

// Attach to all events at once;
monitor.attach(initOptions)

// // Import pg-promise and initialize the library with an empty object.
// const pgp = require("pg-promise")(initOptions);
//
// // Prepare the connection URL from the format: 'postgres://username:password@host:port/database';
// const connectionURL = "postgres://localhost:5432/calendar_db";
//
// // Creating a new database connection with the provided URL.
// const db = pgp(connectionURL);
//
// module.exports = db;
const pgp = require("pg-promise")()

let db

if (process.env.NODE_ENV === "development" || !process.env.NODE_ENV) {
  db = pgp({
    // Fill in with your local database name
    database: "calendar_db",
    port: 5432,
    host: "localhost"
  })
} else if (process.env.NODE_ENV === "production") {
  // Heroku will set this variable for you.
  db = pgp(process.env.DATABASE_URL)
}

module.exports = db
