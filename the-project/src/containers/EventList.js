import React, { Component } from 'react'
import { connect } from 'react-redux'

class EventList extends Component {
   renderList() {
      return this.props.events.map((event) => {
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