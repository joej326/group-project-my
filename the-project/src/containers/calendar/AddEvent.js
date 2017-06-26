import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
// import { fetchWeather } from '../actions/index'


export class AddEvent extends Component {
   constructor(props){
      super(props)
      this.state = {
         newEvent: ''
      }

   }

// Event objects have the properties: title: string, allDay boolean, start: new Date(), end: new Date()

   render() {
      return (
         <form onSubmit={this.onFormSubmit}>
            <input
               type="text"
               placeholder="Title"
               value={this.state.newEvent}
               onChange= {this.onInputChange} />
            <input 
               type="checkbox"
               name= "allDay"
               value="true"
               />
            <span>
               <button type="submit">Add Event</button>
            </span>
         </form>
      )
   }
}

