import React, { Component } from 'react'

import { connect } from 'react-redux'

// *** Actions
import { fetchRevenue } from '../../actions'
import { fetchNetExpenses } from '../../actions'
import { fetchBudget } from '../../actions'
import { fetchDTE } from '../../actions'
import { fetchProfitMargin } from '../../actions'


class FinancialView extends Component {
   componentDidMount(){
      console.log("Revenue: ", this.props.fetchRevenue())
      console.log("Net Expenses: ", this.props.fetchNetExpenses())
      console.log("Budget: ", this.props.fetchBudget())
      console.log("Debt To Equity: ", this.props.fetchDTE())
      console.log("Profit Margin: ", this.props.fetchProfitMargin())

   }

   render(){
      return (
         <div>
         
         <div className="row">
         <div
         className="col-md-offset-2 col-md-4">
            Name: Sales Ops
            <br />
            Data: ??
            <br />
            Chart Type: Table
         </div>

         <div
         className="col-md-offset-1 col-md-4">
            Name: Reps
            <br />
            Data: ??
            <br />
            Chart Type: Bar Chart
         </div>
         </div>

         </div>
      )
   }
}

export default connect(null, { fetchRevenue, fetchNetExpenses, fetchBudget, fetchDTE, fetchProfitMargin })(FinancialView)