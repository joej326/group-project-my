import React, { Component } from 'react'
import HTML5Backend from 'react-dnd-html5-backend'
import { DragDropContext } from 'react-dnd'
import BigCalendar from 'react-big-calendar'
import moment from 'moment'
import withDragAndDrop from 'react-big-calendar/lib/addons/dragAndDrop'
import $ from 'jquery'

import './calendar.css'


BigCalendar.setLocalizer(
  BigCalendar.momentLocalizer(moment)
)

const DragAndDropCalendar = withDragAndDrop(BigCalendar)

class Dnd extends Component {
  constructor (props) {
    super(props)
    this.state = {
      events:  this.props.events
    }
    this.moveEvent = this.moveEvent.bind(this)
  }


  onCalendarReturn(){
    $(document).ready(function(){
      $('.rbc-month-row').addClass('calendar-square')
      $('.calendar-square').css({height: '8vw'})
    })
  }

  componentDidMount(){
    let onCalendarReturn = this.onCalendarReturn
    $(document).ready(function(){
      $('.rbc-month-row').addClass('calendar-square')
      $('.rbc-active').addClass('return-button')
      
      $('.calendar-square').css({height: '10vw'})

      $('.return-button').on('click',function(){
        onCalendarReturn()

      })
    })

  }

  moveEvent({ event, start, end }) {
    const { events } = this.state
    const idx = events.indexOf(event)
    const updatedEvent = { ...event, start, end }

    const nextEvents = [...events]
    nextEvents.splice(idx, 1, updatedEvent)

    this.setState({
      events: nextEvents
    })
  }

  render(){
    return (
      <DragAndDropCalendar
        selectable
        events={ this.props.events }
        onEventDrop={ this.moveEvent }
        defaultView='month'
        defaultDate={new Date(2017, 6, 16)}
      />
    )
  }
}

export default DragDropContext(HTML5Backend)(Dnd)
