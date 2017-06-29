var app = require('../server.js')
, db = app.get('db')

module.exports = {
   get: function(req, res, next){
      db.test.get_test(function(err, test){
         if(err){
            console.log(err)
            return res.status(500).send(err)
         }

         return res.status(200).send(test)
      })
   },

   post: function(req, res, next){
      let test = req.body
      db.test.post_test([test.name], function(err, test){
         if(err){
         console.log(err)
         return res.status(500).send(err)
      }
      return res.status(200).send(test)
      })

   }
}