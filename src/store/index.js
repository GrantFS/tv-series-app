import configureStore from "./configureStore"
import initialState from "./reducers/initialState"

const store = configureStore(initialState)

// (store.dispatch)(loadFeatures());

export default store
