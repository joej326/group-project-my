import React, { Component } from 'react'

import { connect } from 'react-redux'

// *** Actions
import { fetchRevenue } from '../../actions'
import { fetchNetExpenses } from '../../actions'
import { fetchBudget } from '../../actions'
import { fetchDTE } from '../../actions'
import { fetchProfitMargin } from '../../actions'
// *** Actions
import { fetchSalesOpps } from '../../actions'
import { fetchRepsQ2 } from '../../actions'

import './../../styles/finances.css';
import Chart from 'chart.js';


class SalesView extends Component {
   constructor(props){
      super(props)
      this.state = {
         oppsData: null
      }
   }
   componentDidMount(){
         this.props.fetchSalesOpps().then((results)=>{
               this.setState({
            oppsData: results.payload.data
         })
      })


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

export default connect(null, { fetchRevenue, fetchNetExpenses, fetchBudget, fetchDTE, fetchProfitMargin })(SalesView)
