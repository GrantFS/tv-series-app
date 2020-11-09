import { createStore, applyMiddleware, compose } from "redux";
import { createLogger } from "redux-logger";
import thunkMiddleware from "redux-thunk";
import rootReducer from "./reducers/rootReducer";

const loggerMiddleware = createLogger();
const composeEnhancers = process.browser && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let middleware = [thunkMiddleware];
if(process.browser && process.env.NODE_ENV !== "production") {
  middleware.push(loggerMiddleware);
}

export function initializeStore (initialState = {}) {
  return createStore(
    rootReducer,
    initialState,
    composeEnhancers(
      applyMiddleware(
        ...middleware
      )
    )
  );
}