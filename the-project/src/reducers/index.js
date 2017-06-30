import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

// *** Events for Calendar ***
import EventsReducer from './Calendar/reducer_events'
import GetEventsReducer from './Calendar/reducer_get_events'



const rootReducer = combineReducers({
   events: EventsReducer
   , getEvents: GetEventsReducer
   , form: formReducer
})

export default rootReducer

// combineReducer is how redux creates out applications state (different than components state)