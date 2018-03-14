var User = require('./../../model/user');

module.exports = function(req, res) {
    var _id = req.decoded._id;
    User.findByIdAndRemove(_id, function(err) {
        if (err) {
            res.status(500).json({
                success: false,
                message: err.message
            })
        } else {
            res.status(200).json({
                success: true,
                message: "Your account has been removed"
            })
        }
    })
}