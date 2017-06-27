import React, { Component } from 'react'
import { connect } from 'react-redux'
import events from './Events'


class EventList extends Component {
   constructor(props){
      super(props)
      this.state = {
         events: events()
      }
   }
   renderList() {
      return this.state.events.map((event) => {
         return (
            <li
               key={event.title}>
               {event.title}
            </li>
         )
      })
   }

   render(){
      return (
         <ul>
            {this.renderList()}
         </ul>
      )
   }
}


function mapStateToProps(state){
   return {
      events: state.events
   }
}

export default connect(mapStateToProps, null)(EventList)