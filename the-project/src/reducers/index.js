import { combineReducers } from 'redux'
import EventsReducer from './calendar/reducer_eventslist'
import ActiveEvent from './calendar/reducer_active_event'

const rootReducer = combineReducers({
   events: EventsReducer
   , activeEvent: ActiveEvent
})

export default rootReducer