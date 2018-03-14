// get an instance of mongoose and mongoose.Schema
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
// TODO: add more data like array for subbs, and publisher id's
// set up a mongoose model and pass it using module.exports
var bcrypt = require('bcrypt');

var schema = new Schema({ 
    nameFirst: {
        type: String,
        required: true,
    }, 
    nameLast: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    passLastModified: {
        type: Date, 
        //required: true,
        default: Date.now(),
    },
    email: {
        type: String,
        index: {
            //unique: true, 
        },
        required: true,
    },
    createdAt: { 
        type: Date, 
        default: Date.now(),
        index: {
            expires: '1d'
        }
        //required: true
    },
});

schema.pre('save', function(next) {
    // do stuff
    var self = this;
    bcrypt.hash(this.password, 10, function(err, hash) {
        // Store hash in your password DB.
        if (err) {
            //console.log("ERROR")
            return next(err);
        } else {
            //console.log(hash)
            self.password = hash;
            return next()
        }
      });
    //next();
  });

module.exports = mongoose.model('tempusers', schema);