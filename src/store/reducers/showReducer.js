import * as types from "../types";
import initialState from "./initialState";

export default function showReducer(state = initialState.show, action) {
  let tmp = null;
  switch (action.type) {
    case types.GET_SHOW:
      tmp = Object.assign({}, state);
      tmp.isFetching = true;
      state = tmp;
      break;
    case types.GET_SHOW_SUCCESS:
      tmp = Object.assign({}, state);
      tmp.isLoaded = true;
      tmp.data = action.show;
      state = tmp;
      break;
    default:
        break;
  }
  return state;
}