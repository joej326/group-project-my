var app = require('../server.js')
, db = app.get('db')

module.exports = {
   //Get Budget
   getBudget: function(req, res, next){
      db.charts.budget(function (err, budget){
         if(err){
            console.log("get budget err", err)
            return res.status(500).send(err)
         }
         return res.status(200).send(budget)
      })
   },
   //Get Debt to Equity
   getDebtToEquity: (req, res, next) => {
      db.charts.debt_to_equity((err, debtToEquity) => {
         if(err){
            console.log(err)
            return res.status(500).send(err)
         } else {
            return res.status(200).send(debtToEquity)
         }
      })
   },
   //Get Net Expenses
   getNetExpenses: (req, res, next) => {
      db.charts.net_expenses((err, netExpenses) => {
         if(err){
            console.log(err)
            return status(500).send(err)
         } else {
            return res.status(200).send(netExpenses)
         }
      })
   },
   //Get Profit Margin
   getProfitMargin: (req, res, next) => {
      db.charts.profit_margins((err, profitMargin) => {
         if(err){
            console.log(err)
            return status(500).send(err)
         } else {
            return res.status(200).send(profitMargin)
         }
      })
   },
   //Get Reps Quarter 2
   getRepsQ2: (req, res, next) => {
      db.charts.reps_q2((err, repsQ2) => {
         if(err){
            console.log(err)
            return status(500).send(err)
         } else {
            return res.status(200).send(repsQ2)
         }
      })
   },
   //Get Revenue
   getRevenue: (req, res, next) => {
      db.charts.revenue((err, revenue) => {
         if(err){
            console.log(err)
            return status(500).send(err)
         } else {
            return res.status(200).send(revenue)
         }
      })
   },
   //Get Sales Opps
   getSalesOpps: (req, res, next) => {
      db.charts.reps_q2((err, salesOpps) => {
         if(err){
            console.log(err)
            return status(500).send(err)
         } else {
            return res.status(200).send(salesOpps)
         }
      })
   }



}