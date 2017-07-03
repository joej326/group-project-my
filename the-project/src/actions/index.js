import axios from 'axios'

export const FETCH_EVENTS = 'fetch_events'
export const CREATE_EVENT = 'create_event'

const ROOT_URL = 'http://localhost:3006/api'


export function fetchEvents() {
   const request = axios.get(`${ROOT_URL}/events`)
      
   return {
      type: FETCH_EVENTS
      , payload: request
   }
}

export function createEvent(values){
   const request = axios.post(`${ROOT_URL}/newevent`, values)
   console.log(request)
   return {
      type: CREATE_EVENT
      , payload: request
   }
}