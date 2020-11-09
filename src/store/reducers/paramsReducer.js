import * as types from "../types";
import initialState from "./initialState";

export default function paramsReducer(state = initialState.params, action) {
  let tmp = null;
  switch (action.type) {
    case types.SET_PARAMS:
      tmp = Object.assign({}, state);
      tmp = action.params;
      state = tmp;
      break;
    default:
        break;
  }
  return state;
}

