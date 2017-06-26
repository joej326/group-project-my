import React, { Component } from 'react';
import Calendar from './Calendar'
import EventList from '../../containers/EventList'

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