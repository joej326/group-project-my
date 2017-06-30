var app = require('../server')
, db = app.get('db')

module.exports = {
   getAllEvents: (req, res, next) => {
      db.events.get_events([user.email], (err, events) =>{
         if(err){
            console.log(err)
            return res.status(500).send(err)
         } else {
            return res.status(200).JSON(events)
         }
      })
   },

   createEvent: (req, res, next) => {
      console.log(req.body)
      let event = req.body
   db.events.add_event([event.title, event.allDay, event.start, event.end], (err, event) => {
      if (err) {
         console.log("Add Event ERROR: ", err)
         return res.status(500).send(err)
      } else {
         return res.status(200).JSON(event)
      }
   })
}



}