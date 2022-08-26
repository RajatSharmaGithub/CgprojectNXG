import { createStore, applyMiddleware } from 'redux'
import reduxThunk from 'redux-thunk'
import rootReducer from './root-reducer'

// import logger from "redux-logger";

const middlewares = [reduxThunk]

// if (process.env.NODE_ENV === "development") {
//     middlewares.push(logger)
// }

const store = createStore(rootReducer, applyMiddleware(...middlewares))

export default store
