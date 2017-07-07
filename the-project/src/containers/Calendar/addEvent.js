
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
         <div
         className="black-text">
            <label>
                  <h4>{field.label}</h4>
            </label>
            <input
            type="text"
            className="form-control"
            placeholder="Title"
            {...field.input}
            />
            {field.meta.touched ? field.meta.error : ''}
         </div>
      )
   }

   renderDate(field){
      return (
         <div>
            <label><h4>{field.label}</h4></label>
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

   submitEvent(){
         window.location.reload()
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
               {/*<Field
               label="Desctiption"
               name="desc"
               component={this.renderField}
               />*/}
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
               <button 
               className="btn btn-primary"
               onClick = {this.submitEvent}>
               Add Event
               </button>
            </form>
      )
   }
}

function validate(values){
   const errors = {}

   if(!values.title){
      errors.title = "Enter an Event Title"
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