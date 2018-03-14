const express = require('express');
var api = express.Router(); 

// Models
var TempUser = require('./../model/tempuser');
var User = require('./../model/user');

api.all('/', function(req, res) {
    //res.json(404, "I don't have that");
    res.status(404).json({
        success: false,
        error: "Give me a command"
    });
})


api.post('/user', function(req, res) {
    // TODO: Enable temp user creation
    var doc = new TempUser(req.body);
    
    // Validate for schema error
    var error = doc.validateSync();
    
    if (error) { // Check if schema error
        res.status(400).json({
            success: false,
            message: error.message
        })
    } else {
        doc.save(function(err, x) { // Save temp user
            if (err) {
                res.status(500).json({
                    success: false,
                    message: err.message
                })
            } else {
                // TODO
                res.status(202).json({
                    success: true,
                    message: "User was successfully created. However, please verify your account with your email in order to login."
                });
            }
        })
    }
})
 

module.exports = api;