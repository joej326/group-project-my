import React, { Component } from 'react'

// *** Components ***
import Calendar from '../../containers/Calendar/calendar'
import EventList from '../../containers/Calendar/events-list'
import AddEvent from '../../containers/Calendar/addEvent'

import { connect } from 'react-redux'
import { fetchEvents } from '../../actions/index'


class App extends Component {
   componentDidMount(){
      this.props.fetchEvents()
   }

   render() {

      return (
        <div>

          <div
          className="row some-space">
          </div>

         <div
         className="row">

          <div
          className="col-md-5 col-md-offset-1">
            <Calendar 
            events = { this.props.events.map((event) => {
                  return new modifyEvent(event)
                
                    function modifyEvent(event){
                      this.user_id = event.user_id
                      this.event_id = event.event_id
                      this.title = event.title
                      this.allDay = false
                      this.start = new Date(event.start_date.split('-').join(' '))
                      this.end = new Date(event.end_date.split('-').join(' '))
                    }
            }) } />
            </div>

             <div
            className="col-md-5 black-text">

            <EventList events = { this.props.events } />

            <AddEvent />

          </div>

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


export default connect(mapStateToProps, { fetchEvents })(App)

