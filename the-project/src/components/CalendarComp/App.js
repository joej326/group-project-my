import React, { Component } from 'react'
import Calendar from './Calendar'
import EventList from './EventList'
import AddEventComp from './AddEvent'


export default class CalendarApp extends Component {

  render() {
    return (
      <div>
        <Calendar />
        <EventList />
        <AddEventComp />
      </div>
    );
  }
}
