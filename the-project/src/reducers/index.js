import { combineReducers } from 'redux'
import { reducer as FormReducer } from 'redux-form'

// *** Events for Calendar ***
import EventsReducer from './Calendar/reducer_get_events'

// *** Charts for Charts ***
import ChartsReducer from './Charts/reducer_get_charts'



const rootReducer = combineReducers({
   events: EventsReducer
   , charts: ChartsReducer
   , form: FormReducer
})

export default rootReducer

// combineReducer is how redux creates out applications state (different than components state)