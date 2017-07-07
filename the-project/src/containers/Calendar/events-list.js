import React, { Component } from 'react'
import _ from 'lodash'
import { connect } from 'react-redux'

import Events from './events'

class EventsIndex extends Component {

   deleteEvent(event){
      console.log(event)
   }

 

   render() {
      return (
         <div>
            <h4
            className="white-text">
            Events</h4>
            <div
            className="panel panel-default black-text">
               { this.props.events.map( eventItem => {
                  return (
                     <Events event = { eventItem }/>
                     )
               }) }
            </div>               
         </div>
      )
   }
}

function mapStateToProps(state){
   return {
      events: state.events
   }
}

export default connect(mapStateToProps)(EventsIndex)