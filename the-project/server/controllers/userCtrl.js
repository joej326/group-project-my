// APP //
var app = require('./../server');
var db = app.get('db');

module.exports = {
	// RETURN CURRENT USER //
	me: function(req, res, next) {
		if (!req.user) {
			return res.status(200).send(null);
		}

		// Return user
		return res.status(200).send(req.user);
	}
}