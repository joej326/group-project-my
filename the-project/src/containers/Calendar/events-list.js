import React, { Component } from 'react'
import _ from 'lodash'
import { connect } from 'react-redux'

class EventsIndex extends Component {

   renderEvents(){
      return _.map(this.props.events, event => {
         return (
            <div 
            key={event.event_id}
            className="panel-body">
               {event.title}
               <div
               className="text-right">
               <button
               className="btn btn-danger">
                  Delete
               </button>
               </div>
            </div>
         )
      })
   }

   render() {
      return (
         <div>
            <h4
            className="white-text">
            Events</h4>
            <div
            className="panel panel-default black-text">
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