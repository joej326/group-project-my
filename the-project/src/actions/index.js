import axios from 'axios'

export const FETCH_EVENTS = 'fetch_events'
export const CREATE_EVENT = 'create_event'

const ROOT_URL = 'someURL'


export function getEvents() {
   const request = axios.get(`${ROOT_URL}/events`)

   return {
      type: FETCH_EVENTS
      , payload: request
   }
}

export function createEvent(values){
   console.log(values)
   const request = axios.post(`${ROOT_URL}/posts`, values)

   return {
      type: CREATE_EVENT
      , payload: request
   }
}