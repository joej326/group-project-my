import { combineReducers } from 'redux'
import EventsReducer from '../components/CalendarComp/reducer_add_event'


const rootReducer = combineReducers({
   events: EventsReducer
})

export default rootReducer