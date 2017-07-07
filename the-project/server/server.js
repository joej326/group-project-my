
// EXTERNAL MODULES //
const express = require('express')
, bodyParser = require('body-parser')
, session = require('express-session')
, massive = require('massive')
, cors = require('cors')



// CONFIG
var config = require('./config')

// EXPRESS
var app = module.exports = express();

//app.use(express.static(__dirname));
app.use(bodyParser.json());
app.use(cors());

app.use(session({
   secret: config.SESSION_SECRET
   , saveUninitialized: false
   , resave: false
}));

// MASSIVE AND DB SETUP
var massiveUri = config.MASSIVE_URI
var massiveServer = massive.connectSync({
   connectionString: massiveUri
})

app.set('db', massiveServer)
var db = app.get('db')

// SESSION AND PASSPORT //
// var passport = require('./services/passport');
// app.use(passport.initialize());
// app.use(passport.session());

// PASSPORT ENDPOINTS //
app.get('/auth', function (req, res, next) {
	// Is a different state required for callback?
	console.log('app.get /auth fired')
	if (req.query.state)
		req.session.state = req.query.state;

  passport.authenticate('auth0')(req, res, next);
});
app.get('/auth/callback', function(req, res, next) {
	// Check where the user should be redirected
	console.log('app.get fired')
	var state = 'profile';
	if (req.session.state)
		state = req.session.state;

	req.session.state = null;

	passport.authenticate('auth0', {
	  successRedirect: '/#!/' + state,
	  failureRedirect: '/#!/'
	})(req, res, next);
});

app.get('/api/logout', function(req, res, next) {
	req.logout();
	return res.status(200)
		.send('logged out');
});

// POLICIES //
var isAuthed = function(req, res, next) {
	if (!req.isAuthenticated()) return res.status(401)
		.send();
	return next();
};


// CONTROLLERS //
var eventsCtrl = require('./controllers/eventsCtrl') 
, chartsCtrl = require('./controllers/chartsCtrl')
, testCtrl = require('./controllers/testCtrl')
, userCtrl = require('./controllers/userCtrl')


// *** ENDPOINTS *** //

//USERS
app.get('/api/me', userCtrl.me)


// EVENTS
app.get('/api/events', eventsCtrl.getAllEvents)
app.post('/api/newevent', eventsCtrl.createEvent)


// CHARTS
app.get('/api/charts/budget', chartsCtrl.getBudget)
app.get('/api/charts/debtToEquity', chartsCtrl.getDebtToEquity)
app.get('/api/charts/netExpenses', chartsCtrl.getNetExpenses)
app.get('/api/charts/profitMargin', chartsCtrl.getProfitMargin)
app.get('/api/charts/repsQ2', chartsCtrl.getRepsQ2)
app.get('/api/charts/revenue', chartsCtrl.getRevenue)
app.get('/api/charts/salesOpps', chartsCtrl.getSalesOpps)


// CONNECTIONS //
var port = config.PORT
app.listen(port, () => {
   console.log(`Listening on ${port}`)
})