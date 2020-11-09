import * as types from "../types";

export function getSeries(id) {
  return (dispatch) => {
    dispatch({type: types.GET_SERIES});
    fetch(`http://api.tvmaze.com/shows/${id}?embed=episodes`)
    .then(response => response.json())
    .then(json => dispatch(getSeriesSuccess(json)));  
  }
}

export function getSeriesSuccess(series) {
  return {
    type:types.GET_SERIES_SUCCESS,
    series
  };
}