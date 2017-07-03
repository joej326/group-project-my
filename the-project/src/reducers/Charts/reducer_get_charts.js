import { FETCH_BUDGET } from '../../actions'
import { FETCH_DTE } from '../../actions'
import { FETCH_NETEXPENSES } from '../../actions'
import { FETCH_PROFITMARGIN } from '../../actions'
import { FETCH_REPSQ2 } from '../../actions'
import { FETCH_REVENUE } from '../../actions'
import { FETCH_SALESOPPS } from '../../actions'


export default function(state = {}, action){
   switch(action.type){
      case FETCH_BUDGET:
         return action.payload.data
      case FETCH_DTE:
         return action.payload.data
      case FETCH_NETEXPENSES:
         return action.payload.data
      case FETCH_PROFITMARGIN:
         return action.payload.data
      case FETCH_REPSQ2:
         return action.payload.data
      case FETCH_REVENUE:
         return action.payload.data
      case FETCH_SALESOPPS:
         return action.payload.data
      default:
         return state
   }
}