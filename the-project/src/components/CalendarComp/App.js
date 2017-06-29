import React, { Component } from 'react'
import { connect } from 'react-redux'

// *** Components ***
import Calendar from '../../containers/Calendar/calendar'
import EventList from '../../containers/Calendar/events-list'
import AddEvent from '../../containers/Calendar/addEvent'


class App extends Component {
   render() {
      return (
         <div>
            <Calendar events = {this.props.events} />
            <EventList events = {this.props.events} />
            <AddEvent />
         </div>
      )
   }
}

function mapStateToProps(state){
   return {
      events: state.events
   }
}

export default connect(mapStateToProps)(App)