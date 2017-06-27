
export const ADD_EVENT = 'ADD_EVENT'

export function addEvent(newEvent) {
   return {
      type: ADD_EVENT
      , payload: newEvent
   }
}

