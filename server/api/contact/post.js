var validator = require('validator');
var Mailer = require('./../mailer');


module.exports = function(req, res, next) {
    if (req.body.name && validator.isEmail(req.body.email) && req.body.message) {
        var name = req.body.name;
        var email = req.body.email;
        var message = req.body.message;


        var messageEmail = `
        <p>From: ${name}, ${email}</p>
        <p>${message}</p>

        ` 
        var subject = `Contact Form - ${name}`

        Mailer.sendMail("pickleboyonline@gmail.com",messageEmail,subject);

        res.status(200).json({
            success: true,
            message: "Your email was recieved"
        })



    } else {
        res.status(400).json({
            success: false,
            message: "Please fill out the whole form"
        })
    }
}