import React, { Component } from 'react'
import _ from 'lodash'
import { connect } from 'react-redux'
import { fetchTest } from '../actions'

class TestComp extends Component {
   componentDidMount(){
      this.props.fetchTest()
   }

   renderTest(){
      return _.map(this.props.test, test => {
         return (
            <li key={test.name}>{test.name}</li>
         )
      })
   }

   render(){
      return (
         <div>
            <h3>This is a test</h3>
            <ul>
               { this.renderTest() } 
            </ul>
         </div>
      )
   }
}

function mapStateToProps(state){
   return {
      test: state.test
   }
}

export default connect(mapStateToProps, { fetchTest })(TestComp)