// Models
var TempUser = require('./../../model/tempuser');
var User = require('./../../model/user');

// Mail transporter
var Mailer = require('./../mailer');

// Password encrypter
var bcrypt = require('bcrypt');



module.exports = function(req, res) {
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
                res.status(400).json({
                    success: false,
                    message: err.message
                })
            } else {
                // TODO: Add email sending
                Mailer.sendMail(doc.email, x._id);
                res.status(202).json({
                    success: true,
                    message: "User was successfully created. However, please verify your account with your email in order to login."
                });
            }
        })
    }
};