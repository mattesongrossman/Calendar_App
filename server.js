const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

// Require models
const Event = require('./model/Event');
const User = require('./model/User');

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// Enable cross-origin support so the site loaded on localhost:3000
// Can make AJAX requests to the server on localhost:4567
app.use(cors());

// Create application/json parser
const jsonParser = bodyParser.json();


// Get one user


// Create new user


// Get all events for one user



// Get one event from one user's events


// Create an event


// Edit an event


// Delete an event



// Start server
app.listen(4567, () => console.log('Express server listening on port 4567!'));
