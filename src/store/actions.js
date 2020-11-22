import { loadSeasons } from "./dispatchers/seasons";
import { getSeries } from "./dispatchers/series";
import { loadCast } from "./dispatchers/cast";
import { loadImages } from "./dispatchers/images";

const api = "http://api.tvmaze.com/";
let shows = {};
let people = {};
let all = {};

export function findShow(search) {
  fetch(`${api}/search/shows?q=${search}`)
    .then(response => response.json())
    .then(json => {
      all.series = json;
    });
    fetch(`${api}/search/people?q=${search}`)
    .then(response => response.json())
    .then(json => {
      all.people = json
      all.isFetching = false;
    });
    return all;
}

export function ensureLoaded(keys) {
  return (dispatch, getState) => {
    let status = getState();
    if (!Array.isArray(keys)) {
      keys = [keys];
    }

    keys.forEach((key) => {
      let { id, name } = key;
      if (status && typeof (status[name]) != "undefined" && !status[name].isLoaded && !status[name].isFetching) {
        switch (name) {
          case "series":
            console.log("Load Series");
            dispatch(getSeries(id));
            break;
          case "seasons":
            console.log("Load Seasons");
            dispatch(loadSeasons(id));
            break;
          case "cast":
            console.log("Load Cast");
            dispatch(loadCast(id));
            break;
          case "images":
            console.log("Load Images");
            dispatch(loadImages(id));
            break;
          default:
            break;
        }
      }
    });
  };
}
