import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

// *** Actions ***
import { addEvent } from '../../actions/index'

export class AddEvent extends Component {
  constructor(props){
    super(props)
    this.state = {
      newEvent: ''
    }
    
    this.onFormSubmit = this.onFormSubmit.bind(this)
    this.onInputChange = this.onInputChange.bind(this)
  }

onInputChange(e){
  this.setState({ newEvent: e.target.value })
}

  onFormSubmit(e){
    e.preventDefault()
    this.props.addEvent(this.state.newEvent)
  }

 render(){
    return (
       <form
        onSubmit={this.onFormSubmit}>
          <input
            placeholder="New Event"
            value={this.state.newEvent}
            onChange = {this.onInputChange} />
            <button 
            type="submit">
              Add Event
              </button>
        </form>

    )
 }  
}

// function mapStateToProps(state){

// }

function mapDispatchToProps(dispatch){
  return bindActionCreators({ addEvent }, dispatch)
}

export default connect(null, mapDispatchToProps)(AddEvent)