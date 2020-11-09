import * as types from "../types";

export function loadImages(id) {
  return (dispatch) => {
    dispatch({type: types.GET_IMAGES});
    fetch(`http://api.tvmaze.com/shows/${id}/images`)
    .then(response => response.json())
    .then(json => dispatch(getImagesSuccess(json)));  
  }
}

export function getImagesSuccess(images) {
  return {
    type:types.GET_IMAGES_SUCCESS,
    images
  };
}
