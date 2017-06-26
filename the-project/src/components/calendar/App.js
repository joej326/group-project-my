import React, { Component } from 'react';
import Calendar from './Calendar'
import EventList from '../../containers/calendar/EventList'

export default class CalendarApp extends Component {
  render() {
    return (
      <div>
        <Calendar />
        <EventList />
      </div>
    );
  }
}