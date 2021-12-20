import { createStore, applyMiddleware, compose } from "redux"
import { createLogger } from "redux-logger"
import thunkMiddleware from "redux-thunk"
import rootReducer from "./reducers/rootReducer"

const loggerMiddleware = createLogger()
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export function configureStore(initialState = {}) {
    return createStore(rootReducer, initialState, composeEnhancers(applyMiddleware(thunkMiddleware, loggerMiddleware)))
}
export default configureStore
