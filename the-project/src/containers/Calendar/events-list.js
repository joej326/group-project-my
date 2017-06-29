import React, { Component } from 'react'
import _ from 'lodash'
import { connect } from 'react-redux'
import { getEvents } from '../../actions/index'

class EventsIndex extends Component {
   componentDidMount(){
      this.props.getEvents()
   }

   renderEvents(){
      return _.map(this.props.events, event => {
         return (
            <li key={event.id}>
               {event}
            </li>
         )
      })
   }

   render() {
      return (
         <div>
            <h3>Events</h3>
            <ul>
               {/*{ this.renderEvents() }*/}
            </ul>               
         </div>
      )
   }
}

function mapStateToProps(state){
   return {
      events: state.events
   }
}

export default connect(mapStateToProps, { getEvents })(EventsIndex)