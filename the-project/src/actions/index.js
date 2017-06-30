import axios from 'axios'

export const FETCH_EVENTS = 'fetch_events'
export const CREATE_EVENT = 'create_event'

const ROOT_URL = 'http://localhost:3006/api'


export function getEvents() {
   const request = axios.get(`${ROOT_URL}/events`)

   return {
      type: FETCH_EVENTS
      , payload: request
   }
}

export function createEvent(values){
   console.log("Create event", values)
   const request = axios.post(`${ROOT_URL}/newevent`, values)

   return {
      type: CREATE_EVENT
      , payload: request
   }
}