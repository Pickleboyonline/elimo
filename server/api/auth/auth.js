var User = require('./../../model/user');
var bcrypt = require('bcrypt');
const secret = require('./config').secret;
var jwt = require('jsonwebtoken');

module.exports = function(req, res, next) {
    if (!(req.body.email && req.body.password)) {
        res.status(400).json({
            success: false,
            message: "Need to specify email and password to login"
        })
    } else {
        User.findOne({ // Find the user 
            email: req.body.email
        },  function(err, doc) {
            if (err) {
                res.status(500).json({
                    success: false,
                    message: err.message
                })
            } else if (!doc) {
                res.status(400).json({
                    success: false,
                    message: "User does not exist"
                })
            } else {
                bcrypt.compare(req.body.password, doc.password, function(err, result) { // Validate password
                    // res == true
                    if (err) {
                        res.status(500).json({
                            success: false,
                            message: err.message
                        })
                    } else if (result === false){
                        res.status(400).json({
                            success: false,
                            message: "Invalid Password"
                        })
                    } else { // Create token payload
                        var payload = {
                            _id: doc._id,
                            passLastModified: doc.passLastModified
                        }

                        var token = jwt.sign(payload,secret); // Make token

                        res.status(200).json({
                            success: true,
                            token: token
                        })
                    }
                });
            }
        } )
    }
}