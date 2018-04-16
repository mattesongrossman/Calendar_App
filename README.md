# Project 3 Calendar App
Our project is a calendar web app where users can create, edit, delete, and view upcoming and past events. The calendar's monthly view will remain constant , while the side panel will change based on the user's actions. This allows the user to see all the events and the month as a whole, while also viewing any details or making changes. If a specific day is selected, the side panel will show all of the events on that day broken down by time. From there, the user can choose to edit or delete any of those events. Clicking on the edit button will render an edit form where the user can update information about their event including name, date, time, and any notes they might have. If the add button in the top nav bar is clicked, the side panel will render a create form where the user can create a new event.  

### Explanations of the technologies used
- `bluebird`- library designed specifically for handling promises
- `body-parser`-  middleware useful for parsing through data that can be accessed through request.body (most often used to access form inputs)
- `cors`- Cross-Origin Resource Sharing, allows for cross-domain communication from the browser, wer specifically have been using it to allow the backend (Express) communicate with the front-end React. 
- `express` - Express is neccessary for setting up routhes between the server and client, as well as working/creating APIs, such as the ones we created with our database. 
- `pg-monitor`- logs events related to postgres, npm package, works through node
- `pg-promise`- runs on top of node-postres, allows for interconnectivity between postgres, the server, and the client
- `moment.js` -time can be particularly complex to work with because a single instance of time can be qquantified using many different dimensions such as year, day, time of day, second, minute, time zone,  and time zone. Moment.js  allows for javascript to parse through and better manipulate the these different dimensions, as well as deal with data localization. 

### Installation instructions for dependencies
- Run `yarn install` and `node server.js` in the root of the directory
- Run `yarn install` and `yarn start` in the `calendar_app` directory

### Unsolved problems or hurdles your team had to overcome
Our biggest hurdle in developing our calendar app was figuring out how to make our React component sstructure match the logical structure of how a calendar works, not only on a temporal level but functional level (marking down events). We weren't sure whether we have week and day components in addition to the month component. At the end of the day, we decided that our calendar would work best if we did indeed have seperate components for month, week, and day. 

At first, we thought we need a seperate calendar table to break down the different parts of an events of time by column, such as hour, minute, and day. However, by categorizing the event-time column in our data as TIMESTAMPTZ, we were able to forego having to create a seperate table. 

In some instnces, we had trouble with getting our components to render the way that we wanted them to. For example, when someone clicks login, we wanted the login page to appear on a  a seperate page, but it ends up rendering at the bottom of the calendar. 
Time was an issue for us not only in the technical sense, but also in the practical sense. Because of the time constraints, we weren't able to add all the features we drafted in our user stories, such as a filter and multiple months. 

At the end of the day though, React is about working with many parts, with connected complexity. What better way to fine-tune our react skills than building something as intricate and complex as a calendar app. 
        
 
## General features:
- Monthly view — selecting a date would reveal more info about that day's events
- Adding/creating events
- `moment.js` library for handling date localization
- User auth
- Potential 3rd party APIs: Google Calendar, Facebook Calendar, ESPN, Eventbrite (we'll probably pick one if we have time)

## Models:
Event — handles calls to DB for CRUD on calendar events.
User — user login info, hashed passwords, session data.

## User stories:
- As a working parent of 4, I want a calendar app where I can keep track of different types of events (personal, professional) so I can see just one type of event when I want to.
- As someone who's busiest day of the week is Wednesday, I want an app where I can just see my Wednesday schedule for the next few months so that I can plan for my busiest day of the week.
- As a private person, I want my calendar app to be something separate from my work email so that it doesn't get synced with my work email.
- As a web developer with too many views already open, I hate having to check views in order to view more information about a specific date. I want an app where I can just see the information for a specific day by clicking on it in the monthly view without having to change views so that I don't have to click back to get back to the monthly view.
- As someone who is always anxious about time, I would like to plan things to the minute, so I'm not nearly as stressed about timing.
- As a big picture kind of person, I would like to see all my events for the month, so I can plan new events accordingly.
- As someone who loves colors, I would like my calendar to NOT be bland, so my eyes don't bleed every time I look at it. 
- As someone who hates the apple calendar desktop app I would like a desktop focused application so I can finally diverge from the default app.
- As a private person that's worried about people seeing my schedule, I want a login button to maintain privacy.
- As someone with bad vision, I want the information on my calendar app to be easily readable so that I do not have to strain my eyesight when making plans.
- As a busy professional who's schedule is always changing, I want to be able to delete, create, and delete my calendar to reflect my changing schedule.
- As someone who doesn't like to have to log into google drive just to view their calendar, I want an app where my calendar is the first thing that pops up so that I can get right down to business.
- As an avid planner, I want to simultaneously see a monthly view while also being able to see details about a selected day's events, so I can keep track of both and see them as a whole.
- As a busy person who checks their calendar on-the-go, I want to be able to color code my events by type, so that I can easily know which type of event I have coming up.

## DB Schema
<img src="./img/ERD/db-schema.png" width="600">

## Wireframes
<img src="img/wireframes/Calendar.png" width="425"> <img src="img/wireframes/Day_Detail.png" width="425"> <img src="img/wireframes/Event_Detail.png" width="425"> <img src="img/wireframes/Event_Edit.png" width="425"> <img src="img/wireframes/Create_Event.png" width="425"> <img src="img/wireframes/Register.png" width="425"> <img src="img/wireframes/Login.png" width="425">

## Family Tree Diagram
<img src="./img/family-tree/IMG_0303.JPG" width="600">
