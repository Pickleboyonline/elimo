// get an instance of mongoose and mongoose.Schema
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
// TODO: add more data like array for subbs, and publisher id's
// set up a mongoose model and pass it using module.exports
module.exports = mongoose.model('users', new Schema({ 
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
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    createdAt: { 
        type: Date, 
        default: Date.now()
        //required: true
    },
}));