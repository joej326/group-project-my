import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { createEvent } from '../../actions/index' 

class EventNew extends Component {
   renderField(field){
      return (
         <div>
            <label>{field.label}</label>
            <input
            type='text'
            {...field.input}
            />
            {field.meta.touched ? field.meta.error : ''}
         </div>
      )
   }

   onSubmit(values){
      this.props.createEvent(values)
   }

   render() {
      const { handleSubmit } = this.props

      return (
         <div>
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
               <Field
               label="Title"
               name="title"
               component={this.renderField}
               />
               <Field
               label="All Day"
               name="allDay"
               component={this.renderField}
               />
               <Field
               label="Start"
               name="start"
               component={this.renderField}
               />
               <Field
               label="End"
               name="end"
               component={this.renderField}
               />
               <button className="btn">Add Event</button>
            </form>
         </div>
      )
   }
}

function validate(values){
   const errors = {}

   if(!values.title){
      errors.title = "Enter an Event Title"
   }

   if(!values.allDay){
      errors.allDay = "Is this an allday event?"
   }

   if(!values.start){
      errors.start = "Please Enter Start Date"
   }

   if(!values.end){
      errors.end = "Please Enter End Date"
   }

   return errors
}

export default reduxForm({
   validate,
   form: 'NewEventForm'
})(
   connect(null, { createEvent })(EventNew)
)