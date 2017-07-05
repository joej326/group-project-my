import React, { Component } from 'react'

import { connect } from 'react-redux'

// *** Actions
import { fetchSalesOpps } from '../../actions'
import { fetchRepsQ2 } from '../../actions'


class SalesView extends Component {
   componentDidMount(){
      console.log("Sales Opps: ", this.props.fetchSalesOpps())
      console.log("Reps Q2: ", this.props.fetchRepsQ2())

   }

   render(){
      return (
         <div>
         
         <div className="row">
         <div
         className="col-md-offset-1 col-md-3">
            Name: Revenue
            <br />
            Data: Revenue
            <br />
            Chart Type: Pie
         </div>

         <div
         className="col-md-offset-1 col-md-3">
            Name: Net Expenses
            <br />
            Data: Net Expenses Total
            <br />
            Chart Type: Pie
         </div>

         <div
         className="col-md-offset-1 col-md-3">
            Name: Budget
            <br />
            Data: Budget Total
            <br />
            Chart Type: Pie
         </div>
         </div>

         <div className="row">
         <div
         className="col-md-offset-2 col-md-4">
            Name: Debt to Equity
            <br />
            Data: DTE
            <br />
            Chart Type: Spike Chart
         </div>

         <div
         className="col-md-offset-1 col-md-4">
            Name: Profit Margin & Net Expenses
            <br />
            Data: Profit Margin / Net Expenses
            <br />
            Chart Type: Stacked SparkLine
         </div>
         </div>

         </div>
      )
   }
}

export default connect(null, { fetchSalesOpps, fetchRepsQ2 })(SalesView)