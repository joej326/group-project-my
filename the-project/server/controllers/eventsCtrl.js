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
   db.events.add_event([1, 9, event.title, false, event.startDate, event.endDate], (err, event) => {
      if (err) {
         console.log("Add Event ERROR: ", err)
         return res.status(500).send(err)
      } else {
         return res.status(200).send(event)
      }
   })
   }


}