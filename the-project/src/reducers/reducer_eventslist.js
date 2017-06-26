// New Date objects are formatted as new Date(YYYY/DD/MM)
// Event objects have the properties: title: string, allDay boolean, start: new Date(), end: new Date()

export default function(){
   return [
  {
    'title': 'All Day Event',
    'allDay': true,
    'start': new Date(2017, 5, 0),
    'end': new Date(2017, 5, 1)
  },
  {
    'title': 'Long Event',
    'start': new Date(2017, 5, 7),
    'end': new Date(2017, 5, 10)
  },

  {
    'title': 'DTS STARTS',
    'start': new Date(2017, 5, 13, 0, 0, 0),
    'end': new Date(2017, 5, 20, 0, 0, 0)
  },

  {
    'title': 'DTS ENDS',
    'start': new Date(2017, 50, 6, 0, 0, 0),
    'end': new Date(2017, 50, 13, 0, 0, 0)
  },

  {
    'title': 'Some Event',
    'start': new Date(2017, 5, 9, 0, 0, 0),
    'end': new Date(2017, 5, 9, 0, 0, 0)
  },
  {
    'title': 'Conference',
    'start': new Date(2017, 5, 11),
    'end': new Date(2017, 5, 13),
    desc: 'Big conference for important people'
  },
  {
    'title': 'Meeting',
    'start': new Date(2017, 5, 12, 10, 30, 0, 0),
    'end': new Date(2017, 5, 12, 12, 30, 0, 0),
    desc: 'Pre-meeting meeting, to prepare for the meeting'
  },
  {
    'title': 'Lunch',
    'start':new Date(2017, 5, 12, 12, 0, 0, 0),
    'end': new Date(2017, 5, 12, 13, 0, 0, 0),
    desc: 'Power lunch'
  },
  {
    'title': 'Greeting',
    'start':new Date(2017, 5, 12,14, 0, 0, 0),
    'end': new Date(2017, 5, 12,15, 0, 0, 0)
  },
  {
    'title': 'Happy Hour',
    'start':new Date(2017, 5, 12, 17, 0, 0, 0),
    'end': new Date(2017, 5, 12, 17, 30, 0, 0),
    desc: 'Most important meal of the day'
  },
  {
    'title': 'Dinner',
    'start':new Date(2017, 5, 12, 20, 0, 0, 0),
    'end': new Date(2017, 5, 12, 21, 0, 0, 0)
  },
  {
    'title': 'Birthday Party',
    'start':new Date(2017, 5, 13, 7, 0, 0),
    'end': new Date(2017, 5, 13, 10, 30, 0)
  }
   ]


}