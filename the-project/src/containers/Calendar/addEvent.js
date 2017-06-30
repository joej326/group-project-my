
import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { createEvent } from '../../actions/index'


class EventNew extends Component {
   constructor(props){
      super(props)
      this.state = {
         title: ''
      }
   }

   handleTitleChange(val){
      this.setState({
         title: val
      })
   }

   renderField(field){
      return (
         <div>
            <label>{field.label}</label>
            <input
            type="text"
            className="form-control"
            {...field.input}
            />
            {field.meta.touched ? field.meta.error : ''}
         </div>
      )
   }

   renderAllDay(field){
      return (
         <div className='checkbox'>
            <label></label>
            <input
            type='checkbox'
            {...field.input}
            /> All Day
            {field.meta.touched ? field.meta.error : ''}
         </div>
      )
   }

   renderDate(field){
      return (
         <div>
            <label>{field.label}</label>
            <input
            type='date'
            className='form-control'
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
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
               <div className="form-group">
               <Field
               label="Title"
               name="title"
               component={this.renderField}
               />
               <Field
               label="All Day"
               name="allDay"
               component={this.renderAllDay}
               />
               <Field
               label="Start Date"
               name="startDate"
               component={this.renderDate}
               />
               <Field
               label="End Date"
               name="endDate"
               component={this.renderDate}
               />
               </div>
               <button className="btn btn-primary">Add Event</button>
            </form>
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