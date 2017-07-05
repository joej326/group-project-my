import React, { Component } from 'react'

import { connect } from 'react-redux'

// *** Chart Actions
import { fetchRevenue } from '../../actions'
import { fetchProfitMargin } from '../../actions'
import { fetchBudget } from '../../actions'
import { fetchNetExpenses} from '../../actions'


class ExecView extends Component {
   componentDidMount(){
      console.log("Revenue: ", this.props.fetchRevenue())
      console.log("Profit Margin: ", this.props.fetchProfitMargin())
      console.log("Budget: ", this.props.fetchBudget())
      console.log("Net Expenses: ", this.props.fetchNetExpenses())

   }

   render(){
      return (
         <div>
         
         <div className="row">
         <div
         className="col-md-offset-2 col-md-4">
            Name: Revenue
            <br />
            Data: Total Revenue
            <br />
            Chart Type: Gauge
         </div>

         <div
         className="col-md-offset-1 col-md-4">
            Name: Profit Margin
            <br />
            Data: Total Profit Margin
            <br />
            Chart Type: Gauge
         </div>
         </div>

         <div className="row">
         <div
         className="col-md-offset-2 col-md-4">
            Name: Budget
            <br />
            Data: Total Budget
            <br />
            Chart Type: Gauge
         </div>

         <div
         className="col-md-offset-1 col-md-4">
            Name: net Expenses
            <br />
            Data: Net Expenses Total
            <br />
            Chart Type: Gauge
         </div>
         </div>



         </div>
      )
   }
}

export default connect(null, { fetchRevenue, fetchProfitMargin, fetchBudget, fetchNetExpenses })(ExecView)