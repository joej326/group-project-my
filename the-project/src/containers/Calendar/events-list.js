import React, { Component } from 'react'
import _ from 'lodash'
import { connect } from 'react-redux'

class EventsIndex extends Component {

   renderEvents(){
      console.log(this.props.events)
      return _.map(this.props.events, event => {
         return (
            <div 
            key={event.event_id}
            className="panel-body">
               {event.title}
            </div>
         )
      })
   }

   render() {
      return (
         <div>
            <h4>Events</h4>
            <div
            className="panel panel-default">
               { this.renderEvents() }
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