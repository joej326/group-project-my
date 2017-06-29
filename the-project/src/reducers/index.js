import { combineReducers } from 'redux'

// *** Events for Calendar ***
import EventsReducer from './Calendar/reducer_events'
import GetEventsReducer from './Calendar/reducer_get_events'



const rootReducer = combineReducers({
   events: EventsReducer
   , getEvents: GetEventsReducer
})

export default rootReducer

// combineReducer is how redux creates out applications state (different than components state)