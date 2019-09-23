import { createStore, applyMiddleware, compose } from 'redux'
import reducers from './combinedReducers'
import thunk from 'redux-thunk'
import createSaga from 'redux-saga'
import { createRequestInstance, watchRequests, requestsPromiseMiddleware } from 'redux-saga-requests'
import { createDriver } from 'redux-saga-requests-axios'
import axios from 'axios'
import { createLogger } from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension'


axios.defaults.baseURL = process.env.NODE_ENV === 'development'
    ? process.env.API_DEVELOPMENT
    : process.env.API_PRODUCTION

function* rootSaga() {
  yield createRequestInstance({ driver: createDriver(axios) })
  yield watchRequests()
}

const saga = createSaga()
const logger = createLogger({ collapsed: true})

const store = createStore(
  reducers,
  compose(
    composeWithDevTools(
      applyMiddleware(thunk, saga, requestsPromiseMiddleware(), logger),
    )
  )
)

saga.run(rootSaga)

export default store
