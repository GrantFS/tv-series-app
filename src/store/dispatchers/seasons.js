import * as types from "../types";

export function loadSeasons(id) {
  return (dispatch) => {
    dispatch({type: types.GET_SEASONS});
    fetch(`http://api.tvmaze.com/shows/${id}/seasons`)
    .then(response => response.json())
    .then(json => dispatch(getSeasonsSuccess(json)));  
  }
}

export function getSeasonsSuccess(seasons) {
  return {
    type:types.GET_SEASONS_SUCCESS,
    seasons
  };
}