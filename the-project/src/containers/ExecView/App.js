import React, { Component } from 'react';

import { connect } from 'react-redux';

// *** Chart Actions
import { fetchRevenue } from '../../actions';
import { fetchProfitMargin } from '../../actions';
import { fetchBudget } from '../../actions';
import { fetchNetExpenses} from '../../actions';
import Chart from 'chart.js';


import './../../styles/execView.css';


class ExecView extends Component {
   componentDidMount(){
      console.log("Revenue: ", this.props.fetchRevenue())
      console.log("Profit Margin: ", this.props.fetchProfitMargin())
      console.log("Budget: ", this.props.fetchBudget())
      console.log("Net Expenses: ", this.props.fetchNetExpenses())

Chart.defaults.global.defaultFontColor = 'white';

      var revenue = document.getElementById("revenue").getContext('2d');
 var revenue = new Chart(revenue, {
     type: 'bar',
     data: {
         labels: ['Revenue'],
         datasets: [{
             label: 'Total Revenue',
             data: [9432128],
             backgroundColor: [
                 '#429a34'
             ],
             borderColor: [
                 '#156635'
             ],
             borderWidth: 1
         }]
     },
     options: {
         scales: {
           legend: {
             display: true,
             labels: {
               fontColor: 'red'
             }
           },

             yAxes: [{
               gridLines: {
              display: true ,
              color: "white"
              },
                 ticks: {
                     beginAtZero:true
                 }
             }],
             xAxes: [{
              gridLines: {
              display: true ,
              color: "white"
              },
                 ticks: {
                     beginAtZero:true
                 }
             }]
         }
     }
 });



 var getProfitMargin = document.getElementById("profit-margin").getContext('2d');

 var profitMargin = new Chart(getProfitMargin, {
     type: 'bar',
     data: {
         labels: ['NetTtl','NetAvg','GrossTtl','GrossAvg'],
         datasets: [{
             label: 'Profit Margin',
             data: [75.4,75.4,77.3,77.3],
             backgroundColor: [
                 '#861985',
                 'rgb(54, 99, 235)',
                 '#a11734',
                 '#0e6223'

             ],
             borderColor: [
                 '#491050',
                 'rgba(54, 162, 235, 1)',
                 '#bf0c14',
                 'rgba(75, 192, 192, 1)'
             ],
             borderWidth: 1
         }]
     },
     options: {
         scales: {
           legend: {
             display: true,
             labels: {
               fontColor: 'red'
             }
           },

             yAxes: [{
               gridLines: {
              display: true ,
              color: "white"
              },
                 ticks: {
                     beginAtZero:true
                 }
             }],
             xAxes: [{
              gridLines: {
              display: false ,
              color: "white"
              },
                 ticks: {
                     beginAtZero:true
                 }
             }]
         }
     }
    });





 var getBudget = document.getElementById("budget").getContext('2d');

 var budget = new Chart(getBudget, {
     type: 'bar',
     data: {
         labels: ['Actual Total'],
         datasets: [{
             label: 'Budget',
             data: [1900013],
             backgroundColor: [
                 '#5d57be'
             ],
             borderColor: [
                 '#810e0e'
             ],
             borderWidth: 1
         }]
     },
     options: {
         scales: {
           legend: {
             display: true,
             labels: {
               fontColor: 'red'
             }
           },

             yAxes: [{
               gridLines: {
              display: true ,
              color: "white"
              },
                 ticks: {
                     beginAtZero:true
                 }
             }],
             xAxes: [{
              gridLines: {
              display: true ,
              color: "white"
              },
                 ticks: {
                     beginAtZero:true
                 }
             }]
         }
     }
    });





 var getNetExpenses = document.getElementById("net-expenses").getContext('2d');

 var netExpenses = new Chart(getNetExpenses, {
     type: 'bar',
     data: {
         labels: ['Expenses'],
         datasets: [{
             label: 'Net-Expenses',
             data: [2044097],
             backgroundColor: [
                 '#cd2121'
             ],
             borderColor: [
                 '#810e0e'
             ],
             borderWidth: 1
         }]
     },
     options: {
         scales: {
           legend: {
             display: true,
             labels: {
               fontColor: 'red'
             }
           },

             yAxes: [{
               gridLines: {
              display: true ,
              color: "white"
              },
                 ticks: {
                     beginAtZero:true
                 }
             }],
             xAxes: [{
              gridLines: {
              display: true ,
              color: "white"
              },
                 ticks: {
                     beginAtZero:true
                 }
             }]
         }
     }
  });
   }

   render(){



     console.log(this.props.fetchRevenue().data);
      return (
         <div>

           <div className="mother-div">

    <div className='chart revenue-div'>
      <canvas id="revenue" width="15vw" height="15vw"></canvas>
    </div>

    <div className='chart net-expenses-div'>
      <canvas id="net-expenses" width="15vw" height="15vw"></canvas>
    </div>

  </div>


<div className='x-horizontal'></div>

  <div className="mother-div">

    <div className='chart budget-div'>
      <canvas id="budget" width="15vw" height="15vw"></canvas>
    </div>


    <div className='chart profit-margin-div'>
      <canvas id="profit-margin" width="15vw" height="15vw"></canvas>
    </div>

  </div>


<div className='x-vertical'></div>




         </div>
      )
   }
}

export default connect(null, { fetchRevenue, fetchProfitMargin, fetchBudget, fetchNetExpenses })(ExecView)
