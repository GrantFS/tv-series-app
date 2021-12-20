import configureStore from "./configureStore"
import initialState from "./reducers/initialState"

const store = configureStore(initialState)

// (store.dispatch as ThunkDispatch<State, void, AnyAction>)(loadFeatures());

export default store
