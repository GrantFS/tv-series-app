import * as types from "../types";
import initialState from "./initialState";

export default function personReducer(state = initialState.series, action) {
  let tmp = null;
  switch (action.type) {
    case types.GET_PERSON:
      tmp = Object.assign({}, state);
      tmp.isFetching = true;
      state = tmp;
      break;
    case types.GET_PERSON_SUCCESS:
      tmp = Object.assign({}, state);
      tmp.isLoaded = true;
      tmp.data = action.person;
      state = tmp;
      break;
    default:
        break;
  }
  return state;
}
