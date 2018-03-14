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
    put: require('./user/put'),
    delete: require('./user/delete')
}


// Auth related
var auth = require('./auth/auth');
var protectedPath = require('./auth/protectedPath');

api.all('/', function(req, res) {
    //res.json(404, "I don't have that");
    res.status(404).json({
        success: false,
        error: "Give me a command"
    });
})

// user related 
api.post('/user', userRoutes.post);
api.put('/user/:field/:value', userRoutes.put.public, protectedPath, userRoutes.put.private);
api.delete('/user', protectedPath, userRoutes.delete);


// auth/token creation
api.post('/auth', auth);

api.all('*', function(req, res) {
    //res.json(404, "I don't have that");
    res.status(404).json({
        success: false,
        error: "Not a valid command"
    });
})

module.exports = api;