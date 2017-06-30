
// EXTERNAL MODULES //
const express = require('express')
, bodyParser = require('body-parser')
, session = require('express-session')
, massive = require('massive')
, cors = require('cors')


// CONFIG
var config = require('./config')

// EXPRESS
var app = module.exports = express()


app.use(bodyParser.json())

app.use(session({
   secret: config.SESSION_SECRET
   , saveUninitialized: false
   , resave: false
}))

// MASSIVE AND DB SETUP
var massiveUri = config.MASSIVE_URI
var massiveServer = massive.connectSync({
   connectionString: massiveUri
})

app.set('db', massiveServer)
var db = app.get('db')


// CONTROLLERS //
var eventsCtrl = require('./controllers/eventsCtrl') 
, chartsCtrl = require('./controllers/chartsCtrl')
, testCtrl = require('./controllers/testCtrl')


// ENDPOINTS //

// EVENTS
// app.get('/api/events', eventsCtrl.getAllEvents)
// app.post('/api/events', eventsCtrl.createEvent)

// TEST
app.get('/api/test', testCtrl.get)
app.post('/api/newtest', testCtrl.post)


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