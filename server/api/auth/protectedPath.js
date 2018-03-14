var jwt = require('jsonwebtoken');
const secret = require('./config').secret;

var User = require('./../../model/user');

module.exports = function(req, res, next) {
    var token = req.headers['x-access-token'];
    if (!token) { // Check if there is a token
        res.status(401).json({
            success: false,
            message: "Unauthorized: Please provide a valid token"
        })
    } else {
        jwt.verify(token, secret, function(err, decoded) {
            if (err) { // Invalid token
                res.status(401).json({
                    success: false,
                    message: "Unauthorized: Please provide a valid token"
                })
            } else {
                User.findById(decoded._id, function(err, doc) {
                    if (err) {
                        res.status(500).json({
                            success: false,
                            message: err.message
                        })
                    } else if (!doc) {
                        res.status(400).json({
                            success: false,
                            message: "User not found"
                        })
                    } else { // Check if token is up-to-date
                        var dbPassLastModified = doc.passLastModified;
                        var tokenPassLastModified = new Date(decoded.passLastModified);
                        if (tokenPassLastModified.getTime() < dbPassLastModified.getTime()) { // Outdated
                            res.status(401).json({
                                success: false,
                                message: "Token no longer valid: You have updated your password"
                            })
                        } else {
                            req.decoded = decoded;
                            next();
                        }

                    }
                })
            }
        })
    }
}