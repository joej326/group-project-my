var app = require('../server')
, db = app.get('db')

module.exports = {
   getAllEvents: (req, res, next) => {
      db.events.read_event([1], (err, events) =>{
         if(err){
            console.log(err)
            return res.status(500).send(err)
         } else {
            return res.status(200).send(events)
         }
      })
   },

   createEvent: (req, res, next) => {
      let event = req.body
      let eventId = Math.floor(Math.random() * 100)
   db.events.add_event([1, eventId, event.title, false, event.startDate, event.endDate], (err, event) => {
      if (err) {
         console.log("Add Event ERROR: ", err)
         return res.status(500).send(err)
      } else {
         return res.status(200).send(event)
      }
   })
},

   deleteEvent: (req, res, next) => {
         let event = req.params.id
      db.events.delete_event([event], (err, event) => {
         if (err) {
            console.log("Delete Event ERROR: ", err)
            return res.status(500).send(err)
         } else {
            return res.status(200).send(event)
         }
      })
      }


}