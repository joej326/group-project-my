// APP AND CONFIG
const app = require('../server.js')
, db = app.get('db')
, config = require('./config')

// ALLOW CONSOLE OUTPUT
var allowConsoleOutput = config.INITIALIZE_LOG
var log = function(input){
   if(allowConsoleOutput) {
      console.log(input)
   }
}

// INITIALIZE FUNCTION
module.exports = {
   run: function() {
      log('Initializing Database')

      db.initialize.tables_initialize(function(err, table){
         if(err){
            console.log(err)
         } else {
            console.log('Tables Successfully Initialized')
         }
      })
   }
}