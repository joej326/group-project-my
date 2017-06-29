// State argument is NOT application state, only the state
// this reducer is responsible for
export default function(state = null, action) {
   switch(action.type){
      case 'ADD_EVENT':
         return [action.payload, ...state]
      default:
      return state
   }
}