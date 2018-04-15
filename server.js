const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")
const app = express()
const tokenService = require("./services/TokenService")

// Require models
const Event = require("./model/Event")
const User = require("./model/User")

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// Enable cross-origin support so the site loaded on localhost:3000
// Can make AJAX requests to the server on localhost:4567
app.use(cors())

// Create application/json parser
const jsonParser = bodyParser.json()

// Get one user

// Create new user

app.post("/api/login", jsonParser, (request, response) => {
  const newEvent = request.body
  Event.create(newEvent).then(event => {
    response.redirect(`/api/event/${event.id}`)
  })
})

// Get all events for one user (Need to modify to extract user or session id)
app.get("/api/events", (request, response) => {
  Event.getAll().then(events => {
    response.json(events)
  })
})

// Get one event from a specific user
app.get("/api/event/:id", (request, response) => {
  const eventId = request.params.id
  Event.findById(eventId).then(eventInfo => {
    response.json(eventInfo)
  })
})

// Get all events from a specific year from a specific user
app.get("/api/events/:year", (request, response) => {
  const year = request.params.year
  Event.findByYear(year).then(eventInfo => {
    response.json(eventInfo)
  })
})

// Get all events from a specific month from a specific user
app.get("/api/events/:year/:month", (request, response) => {
  const year = request.params.year
  const month = request.params.month
  Event.findByMonth(year, month).then(eventInfo => {
    response.json(eventInfo)
  })
})

// Get all events from a specific date from a specific user
app.get("/api/events/:year/:month/:day", (request, response) => {
  const year = request.params.year
  const month = request.params.month
  const day = request.params.day
  Event.findByDay(year, month, day).then(eventInfo => {
    response.json(eventInfo)
  })
})

// Create an event
app.post("/api/create", jsonParser, (request, response) => {
  const newEvent = request.body
  Event.create(newEvent).then(event => {
    response.redirect(`/api/event/${event.id}`)
  })
})

// Edit an event
app.put("/api/event/:id", jsonParser, (request, response) => {
  const eventId = request.params.id
  const event = request.body
  Event.update(event).then(event => {
    response.redirect(`/api/event/${eventId}`)
  })
})

// Delete an event
// app.delete("/api/event/:id", (request, response) => {
//   const eventId = request.params.id
//   Event.findById(eventId)
//     .then(event => {
//       return event.delete(event.id)
//     })
//     .then(event => {
//       response.json(event)
//     })
// })
//
app.delete('/api/event/:id', (request, response) => {
  const eventId = request.params.id;
  Event.delete(eventId)
    .then(eventInfo => {
      response.redirect('/api/events');
    })
})

// Start server
app.listen(4567, () => console.log("Express server listening on port 4567!"))
