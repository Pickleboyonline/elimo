const express = require('express');
var api = express.Router(); 

// Models
var TempUser = require('./../model/tempuser');
var User = require('./../model/user');

// Mail transporter
var Mailer = require('./mailer');

// Password encrypter
var bcrypt = require('bcrypt');

// Api Routes

var userRoutes = {
    post: require('./user/post'),
    put: require('./user/put')
}



api.all('/', function(req, res) {
    //res.json(404, "I don't have that");
    res.status(404).json({
        success: false,
        error: "Give me a command"
    });
})


api.post('/user', userRoutes.post);
api.put('/user/:field/:value', userRoutes.put.public, userRoutes.put.private);



api.all('*', function(req, res) {
    //res.json(404, "I don't have that");
    res.status(404).json({
        success: false,
        error: "Not a valid command"
    });
})

module.exports = api;