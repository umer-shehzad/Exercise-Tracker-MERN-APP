const mongoose = require('mongoose');
const express = require('express');
const app = express.Router();

const User = mongoose.model('user');

app.post('/register', async (req, res) => {
    const { username, email, password } = req.body;
    try{
        //if any field is empty, bad request error
        if( !(username && email && password) ){
            res.status(400).send('Please fill all fields to register.');
        }

        //if user is already present in database(check its email), do not register
        let user = await User.findOne( { email } );
        if (user){
            res.status(400).send('User Already Register');
        } else {
            const inputRecords = {
                "username" : username,
                "email" : email,
                "password" : password
            }
            
            //create a new user
            const newUser = new User(inputRecords);
            //save the new user
            await newUser.save();
            res.status(200).send('User Register Successfully');
        }
    } catch (e) {
        console.log('Issue in POST - Register API ', e);
    } 
});

app.post('/login', async (req, res) => {
    if ( req.body.password && req.body.email ){
        let user = await User.findOne(req.body).select('-password');
        if (user) {
            res.status(200).send(user);    
        } else {
            res.send("Unauthorized: User Not Matched.");
        }
    } else {
        res.send("Bad Request: Either password or Email is missing.");
    }
});

module.exports = app;