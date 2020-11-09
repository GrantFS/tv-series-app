import * as types from "../types";
import initialState from "./initialState";

export default function castReducer(state = initialState.cast, action) {
  let tmp = null;
  switch (action.type) {
    case types.GET_CAST:
      tmp = Object.assign({}, state);
      tmp.isFetching = true;
      state = tmp;
      break;
    case types.GET_CAST_SUCCESS:
      tmp = Object.assign({}, state);
      tmp.isLoaded = true;
      tmp.data = action.cast;
      state = tmp;
      break;
    default:
        break;
  }
  return state;
}