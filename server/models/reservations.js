var mongoose = require('mongoose');
var validator = require('validator');

var reservationsSchema = mongoose.Schema({
    user: { type: Schema.Types.ObjectId, ref: 'user' },
    telephoneNumber: {
        type: String,
        validate: {
          validator: function(v) {
            return validator.isMobilePhone(v);
          },
          message: '{VALUE} is not a valid phone number!'
        },
        required: [true, 'User phone number required']
      },
     
  });


module.exports = mongoose.model('reservations', reservationsSchema);