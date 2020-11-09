import * as types from "../types";
import initialState from "./initialState";

export default function seriesReducer(state = initialState.series, action) {
  let tmp = null;
  switch (action.type) {
    case types.GET_SERIES:
      tmp = Object.assign({}, state);
      tmp.isFetching = true;
      state = tmp;
      break;
    case types.GET_SERIES_SUCCESS:
      tmp = Object.assign({}, state);
      tmp.isLoaded = true;
      tmp.data = action.series;
      state = tmp;
      break;
    default:
        break;
  }
  return state;
}