const nodemailer = require('nodemailer');

// TODO: Add async cb for errors


// Generate test SMTP service account from ethereal.email
// Only needed if you don't have a real mail account for testing
function sendMail(reciever, message, subject, cb) {
    nodemailer.createTestAccount((err, account) => {
        // create reusable transporter object using the default SMTP transport
        const transporter = nodemailer.createTransport({
            host: 'smtp.ethereal.email',
            port: 587,
            auth: {
                user: 'kyra.rau@ethereal.email',
                pass: 'eatJ6n9s7me3PATbj2'
            }
        });
        //let link = "http://localhost:80/api/user/verify/" + id;

        // setup email data with unicode symbols
        let mailOptions = {
            from: '"Fred Foo 👻" <foo@example.com>', // sender address
            to: reciever, // list of receivers
            subject: subject, // Subject line
            //text: 'Hi there', // plain text body
            html: message // html body
        };

        // send mail with defined transport object
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                if (cb) cb(error);
                return console.log(error);
            }

            console.log('Message sent: %s', info.messageId);
            // Preview only available when sending through an Ethereal account
            console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
            if (cb) cb(undefined, nodemailer.getTestMessageUrl(info));

            // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
            // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
        });
    });
}



module.exports = {
    sendMail: sendMail
}