import React, { Component } from 'react'
import _ from 'lodash'
import { connect } from 'react-redux'

// *** Actions
import { fetchRevenue } from '../../actions'
import { fetchNetExpenses } from '../../actions'
import { fetchBudget } from '../../actions'
import { fetchDTE } from '../../actions'
import { fetchProfitMargin } from '../../actions'

import './financial.css'


class FinancialView extends Component {
   constructor(props){
      super(props)
      this.state = {
         salesOpps: [
         { name: "Nate A.", sales: 288900, goal: 300000},
         { name: "Isaac C.", sales: 221500, goal: 280000},
         { name: "Tiffany M.", sales: 342000, goal: 300000},
         { name: "Andrea P.", sales: 294500, goal: 280000}
      ]
   }
   this.renderTableRows = this.renderTableRows.bind(this)
   }

   // componentDidMount(){
   //    console.log("Revenue: ", this.props.fetchRevenue())
   //    console.log("Net Expenses: ", this.props.fetchNetExpenses())
   //    console.log("Budget: ", this.props.fetchBudget())
   //    console.log("Debt To Equity: ", this.props.fetchDTE())
   //    console.log("Profit Margin: ", this.props.fetchProfitMargin())


   // }

   renderTableRows(){
      return _.map(this.state.salesOpps, opp => {
         return (
            <tr
            key = { opp.name }>
            { opp.name }
            </tr>
         )
      })
   }

   render(){
      return (
         <div>
         
         <div className="row some-space">
         </div>

         <div className="row">
         <div
         className="col-md-offset-2 col-md-8">

            <div className="panel panel-default">
              <div className="panel-heading">Sales Opporitunities</div>
              <table 
              className="table-hover black-text"
              style= {
                 {
                  width: '100%',
                 marginTop: '10px',
                 marginLeft: '10px',
                 marginBottom: '10px'
                 }
              }>
                <tr>
                   <th>Name</th>
                   <th>Stage</th>
                   <th>Value</th>
                  </tr>
               <tr>
                   <td>Maximun HP</td>
                   <td>Qualified</td>
                   <td>34980</td>
               </tr>
               <tr>
                   <td>Universal N.LLC</td>
                   <td>Executive Sponsor</td>
                   <td>45790</td>
               </tr>
               <tr>
                   <td>CytoSport</td>
                   <td>Discovery</td>
                   <td>58230</td>
               </tr>
               <tr>
                   <td>Gaspari</td>
                   <td>Qualified</td>
                   <td>89760</td>
               </tr>
               <tr>
                   <td>Nutrex</td>
                   <td>Contracts</td>
                   <td>25650</td>
               </tr>
               <tr>
                   <td>ProSource</td>
                   <td>Discover</td>
                   <td>41100</td>
               </tr>
               <tr>
                   <td>MTech</td>
                   <td>Executive Sponsor</td>
                   <td>66340</td>
               </tr>
               <tr>
                   <td>Optimum</td>
                   <td>Contracts</td>
                   <td>22900</td>
               </tr>
               <tr>
                   <td>BSN</td>
                   <td>Discovery</td>
                   <td>89780</td>
               </tr>
               <tr>
                   <td>BioQuest</td>
                   <td>Qualified</td>
                   <td>55900</td>
               </tr>
              </table>
            </div>

         </div>
         </div>

         <div className="row">
         <div
         className="col-md-offset-2 col-md-8">
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