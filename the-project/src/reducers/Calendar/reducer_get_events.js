
import { FETCH_EVENTS } from '../../actions'

export default function(state = [], action){
  switch(action.type){
    case FETCH_EVENTS:
      return action.payload.data
    default:
      return state
  }
}