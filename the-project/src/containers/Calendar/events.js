import React, { Component } from 'react'
import { connect } from 'react-redux'
import { deleteEvent } from '../../actions/index'

class Events extends Component {

   clickDelete(event_id){
      this.props.deleteEvent(event_id)

   }

     render(){
         return (
            <div 
            key={this.props.event.event_id}
            className="panel-body">
               {this.props.event.title}
               <div
               className="text-right">
               <button
               className="btn btn-danger"
               onClick = { () => {
                  this.clickDelete(this.props.event.event_id)
               } }>
                  Delete
               </button>
               </div>
            </div>
         )
   }

}

export default connect(null, { deleteEvent })(Events)