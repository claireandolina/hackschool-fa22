const express = require('express');
const Purchase = require('../models/purchases');


const router = express.Router();
//creating a router, creating api routes

router.get("/purchases", async(req, res) => {
    const purchases = await Purchase.find().exec();
    res.status(200).json({purchases});
});
//creates a "/purchases" api route that accepts GET requests
//exposes a function with "req" and "res" parameters to use as request and response objects
//returns purchase data with a 200 - OK status code

router.post('/purchases', async(req, res) => {
    const { purchase } = req.body; //body of the request we use to pull the data we're sending
    //object destructuring: creating a variable called purchase with all the data from the body
    //second layer of object destructuring: purchases have attributes
    const {name, description, cost, method} = purchase;
    if (!name || !description || !cost || !method) {
        res.status(400).json({error: 'Invalid Input!'});
    } else{
        const newPurchase = await Purchase.create(purchase);
        res.status(200).json({newPurchase});
    }  
});
//req = has all the data
//returns an error message response and proper status code if the purchase doesn't have a name, description, cost, or method
//if no errors occur, return a JSON response with status OK!

//can send POST requests along with JSON data to a server to store/update it in the database
//we will send our purchase name, description,...

module.exports = router;
