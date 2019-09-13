import { createStore, applyMiddleware, compose } from 'redux'
import reducers from './reducers'
import thunk from 'redux-thunk'
import createSaga from 'redux-saga'
import { createRequestInstance, watchRequests, requestsPromiseMiddleware } from 'redux-saga-requests'
import { createDriver } from 'redux-saga-requests-axios'
import axios from 'axios'
import { createLogger } from 'redux-logger'


axios.defaults.baseURL = process.env.NODE_ENV === 'development'
    ? process.env.REACT_APP_API_DOMAIN_DEVELOPMENT
    : process.env.REACT_APP_API_DOMAIN_PRODUCTION

function* rootSaga() {
    yield createRequestInstance({ driver: createDriver(axios) })
    yield watchRequests()
}

const saga = createSaga()
const logger = createLogger({ collapsed: true})
const reduxDevtools = window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f

const store = createStore(
    reducers,
    compose(
        applyMiddleware(thunk, saga, requestsPromiseMiddleware(), logger),
        reduxDevtools
    )
)

saga.run(rootSaga)

export default store
