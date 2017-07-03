import _ from 'lodash'

import { FETCH_EVENTS } from '../../actions'

export default function(state = [], action){
  switch(action.type){
    case FETCH_EVENTS:
      return action.payload.data
    default:
      return state
  }
}


// [
//   {
//     'title': 'All Day Event',
//     'allDay': true,
//     'start': new Date(2017, 5, 0),
//     'end': new Date(2017, 5, 1)
//   },
//   {
//     'title': 'Long Event',
//     'start': new Date(2017, 5, 7),
//     'end': new Date(2017, 5, 10)
//   },

//   {
//     'title': 'DTS STARTS',
//     'start': new Date(2017, 5, 13, 0, 0, 0),
//     'end': new Date(2017, 5, 20, 0, 0, 0)
//   },

//   {
//     'title': 'DTS ENDS',
//     'start': new Date(2017, 50, 6, 0, 0, 0),
//     'end': new Date(2017, 50, 13, 0, 0, 0)
//   },

//   {
//     'title': 'Some Event',
//     'start': new Date(2017, 5, 9),
//     'end': new Date(2017, 5, 9)
//   },
//   {
//     'title': 'Conference',
//     'start': new Date(2017, 5, 11),
//     'end': new Date(2017, 5, 13),
//     desc: 'Big conference for important people'
//   },
//   {
//     'title': 'Meeting',
//     'start': new Date(2017, 5, 12, 10, 30, 0, 0),
//     'end': new Date(2017, 5, 12, 12, 30, 0, 0),
//     desc: 'Pre-meeting meeting, to prepare for the meeting'
//   },
//   {
//     'title': 'Lunch',
//     'start':new Date(2017, 5, 12, 12, 0, 0, 0),
//     'end': new Date(2017, 5, 12, 13, 0, 0, 0),
//     desc: 'Power lunch'
//   },
//   {
//     'title': 'Greeting',
//     'start':new Date(2017, 5, 12,14, 0, 0, 0),
//     'end': new Date(2017, 5, 12,15, 0, 0, 0)
//   },
//   {
//     'title': 'Happy Hour',
//     'start':new Date(2017, 5, 12, 17, 0, 0, 0),
//     'end': new Date(2017, 5, 12, 17, 30, 0, 0),
//     desc: 'Most important meal of the day'
//   },
//   {
//     'title': 'Dinner',
//     'start':new Date(2017, 5, 12, 20, 0, 0, 0),
//     'end': new Date(2017, 5, 12, 21, 0, 0, 0)
//   },
//   {
//     'title': 'Chandlers Birthyay',
//     'start': new Date(2017, 5, 16),
//     'end': new Date(2017, 5, 16)
//   }
//    ]