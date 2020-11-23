import * as types from "../types";

export function loadPeople(id) {
  return (dispatch) => {
    dispatch({type: types.GET_PERSON});
    fetch(`http://api.tvmaze.com/people/${id}`)
    .then(response => response.json())
    .then(json => dispatch(getPersonSuccess(json)));
  }
}

export function getPersonSuccess(person) {
  return {
    type:types.GET_PERSON_SUCCESS,
    person
  };
}

