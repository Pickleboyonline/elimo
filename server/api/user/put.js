// Models
var TempUser = require('./../../model/tempuser');
var User = require('./../../model/user');

// Mail transporter
var Mailer = require('./../mailer');

// Password encrypter
var bcrypt = require('bcrypt');



module.exports = {
    public: function(req, res, next) {
    // TODO: Make user verifaction 
    if (req.params.field === 'verify') { // Logic for verify
        var ID = req.params.value || "";

        TempUser.findById(ID, "-_id -__v", function(e, x) { // Find the temp user
            if (e) {
                res.status(400).json({
                    success: false,
                    message: e.message
                })
            } else if (!x) {
                res.status(400).json({
                    success: false,
                    message: "Link expired"
                })
            } else {
                //var clone = x;
               var doc = new User(x.toObject());

                //console.log(doc.validateSync());
               // console.log(doc)

                doc.save(function(err, user) {
                    if (err) {
                        //console.log(err)
                        res.status(500).json({
                            success: false,
                            message: err.message
                        })
                    } else {
                        
                        res.status(200).json({
                            success: true,
                            message: "Your account was verified"
                        })
                    }
                })
            }
        })
    } else {
        next();
    }

},
private: function(req, res, next) {
    next();
}


};