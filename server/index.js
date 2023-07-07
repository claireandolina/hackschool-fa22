//launching point into entire application
//initializing backend
//create a node application that we'll build our backend on (npm init-y)
//install dependencies (express-framework for node.js)

const express = require('express');
const config = require('./config');
const router = require('./api');
const cors = require('cors');
//cors = cross origin reference sharing.
//when we create our database, we're gonna be interacting with server from another source (database)
//cors is a security protocol that allows us to communicate without leaving server wide open
const mongoose = require('mongoose');

const server = express();

server.use(cors());
//permissions
server.use(express.json());
//requiring it to be in json

server.use(express.urlencoded({ extended: true}));
//to make express work with our database - more boilerplate code
server.use('/api', router);
//tell server to use the api route

mongoose.connect(config.databaseUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true}).then(() => {
    console.log('Connected to MongoDB database');
});

server.listen(config.PORT, () => {
    console.log('Server started on Port ' + config.PORT +'!'); });

//nodemon allows us to just hit save and it'll refresh automatically
//custom script added in package.json for this

//.env environment variables to prevent "magic numbers" in our code--
//what if a process is already running on port 8000 on another client's computer?
