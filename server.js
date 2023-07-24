///////////////////////////////
// DEPENDENCIES
////////////////////////////////
const peopleController = require('./controllers/people-controller')
const cors = require("cors")
const morgan = require("morgan")


require("dotenv").config();
require("./config/db.connection");

// initialize .env variables

// pull PORT from .env, give default value of 4000 and establish DB Connection
const { PORT, MONGODB_URI } = process.env;

// import express
const express = require("express");

// create application object
const app = express();

///////////////////////////////
// MiddleWare
////////////////////////////////
app.use(express.json()); // parse json bodies - this will run before our request accesses the people router
app.use(cors()); // to prevent cors errors, open access to all origins
app.use(morgan("dev")); // logging for development
// all requests for endpoints that begin with '/people'
app.use('/people', peopleController)


///////////////////////////////
// ROUTES
////////////////////////////////
// create a test route
app.get("/", (req, res) => {
		res.send("hello world");
});

///////////////////////////////
// LISTENER
////////////////////////////////
app.listen(PORT, () => console.log(`listening on PORT ${PORT}`));
