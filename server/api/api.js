const express = require('express');
var api = express.Router(); 

api.all('/', function(req, res) {
    //res.json(404, "I don't have that");
    res.status(404).json({
        success: false,
        error: "Give me a command"
    });
})


api.post('/user', function(req, res) {
    // TODO: Enable temp user creation
})
 

module.exports = api;