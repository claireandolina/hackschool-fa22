//launching point into entire application
//initializing backend
//create a node application that we'll build our backend on (npm init-y)
//install dependencies (express-framework for node.js)

const express = require('express');
const config = require('./config');

const server = express();

const router = express.Router();
//creating a router, creating api routes

router.get("/purchases", (req, res) => {
    res.status(200).json({hi: "mom"});
});
//creating a get api route, so when client sends a get request, itll hit this route,
//which has a request and response. when function fires, give a status response
//and output something in json to show it works

server.use('/api', router);
//tell server to use the api route

server.listen(config.PORT, () => {
    console.log('Server started on Port ' + config.PORT +'!'); });


//nodemon allows us to just hit save and it'll refresh automatically
//custom script added in package.json for this


//.env environment variables to prevent "magic numbers" in our code--
//what if a process is already running on port 8000 on another client's computer?
