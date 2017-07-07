import axios from 'axios'

const ROOT_URL = 'http://localhost:3006/api'

// *** EVENTS ***

// *** Fetch Event
export const FETCH_EVENTS = 'fetch_events'

export function fetchEvents() {
   const request = axios.get(`${ROOT_URL}/events`)
      
   return {
      type: FETCH_EVENTS
      , payload: request
   }
}


// *** Create Event
export const CREATE_EVENT = 'create_event'

export function createEvent(values){
   const request = axios.post(`${ROOT_URL}/newevent`, values)
   console.log(request)
   return {
      type: CREATE_EVENT
      , payload: request
   }
}





// *** CHARTS ***

// *** Fetch Budget
export const FETCH_BUDGET = 'fetch_budget'

export function fetchBudget() {
   const request = axios.get(`${ROOT_URL}/charts/budget`)
      
   return {
      type: FETCH_BUDGET
      , payload: request
   }
}

// *** Fetch Debt To Equity
export const FETCH_DTE = 'fetch_dte'

export function fetchDTE() {
   const request = axios.get(`${ROOT_URL}/charts/debtToEquity`)
      
   return {
      type: FETCH_DTE
      , payload: request
   }
}

// *** Fetch Net Expenses
export const FETCH_NETEXPENSES = 'fetch_netexpenses'

export function fetchNetExpenses() {
   const request = axios.get(`${ROOT_URL}/charts/netExpenses`)
      
   return {
      type: FETCH_NETEXPENSES
      , payload: request
   }
}

// *** Fetch Profit Margin
export const FETCH_PROFITMARGIN = 'fetch_profitmargin'

export function fetchProfitMargin() {
   const request = axios.get(`${ROOT_URL}/charts/profitMargin`)
      
   return {
      type: FETCH_PROFITMARGIN
      , payload: request
   }
}

// *** Fetch Reps Q2
export const FETCH_REPSQ2 = 'fetch_repsq2'

export function fetchRepsQ2() {
   const request = axios.get(`${ROOT_URL}/charts/repsQ2`)
      
   return {
      type: FETCH_REPSQ2
      , payload: request
   }
}

// *** Fetch Revenue
export const FETCH_REVENUE = 'fetch_revenue'

export function fetchRevenue() {
   const request = axios.get(`${ROOT_URL}/charts/revenue`)
      
   return {
      type: FETCH_REVENUE
      , payload: request
   }
}

// *** Fetch Revenue
export const FETCH_SALESOPPS = 'fetch_salesopps'

export function fetchSalesOpps() {
   const request = axios.get(`${ROOT_URL}/charts/salesopps`)
      
   return {
      type: FETCH_SALESOPPS
      , payload: request
   }
}