const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")
const app = express()

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

// Get all events for one user (Need to modify to extract user or session id)
app.get("/api/events", (request, response) => {
  Event.getAll().then(events => {
    response.json(events)
  })
})

// Get one event from one user's events
app.get('/api/event/:id', (request, response) => {
  const eventId = request.params.id;
  Event.findById(eventId)
    .then(eventInfo => {
      response.json(eventInfo);
    })
})

// Create an event
app.post('/api/create', jsonParser, (request, response) => {
  const newEvent = request.body;
  Event.create(newEvent)
    .then(event => {
      response.redirect(`/api/event/${event.id}`);
    })
})

// Edit an event
app.put('/api/edit/:id', jsonParser, (request, response) => {
  const eventId = request.params.id;
  const event = request.body;
  console.log(event);
  Event.edit(event)
    .then(event => {
      response.redirect(`/api/event/${eventId}`);
    })
})

// Delete an event
app.delete("/api/event/:id", (request, response) => {
  const id = request.params.id
  Event.findById(id)
    .then(event => {
      return event.delete(event.id)
    })
    .then(event => {
      response.json(event)
    })
})


// Start server
app.listen(4567, () => console.log("Express server listening on port 4567!"))
