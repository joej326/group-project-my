import { ADD_EVENT } from '../../actions/index'

export default function(state = [], action){
   switch(action.type){
      case ADD_EVENT:
         return [action.payload, ...state]
      default:
            return state
   }
}