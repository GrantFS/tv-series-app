import { loadSeasons } from "./dispatchers/seasons";
import { getSeries } from "./dispatchers/series";
import { loadCast } from "./dispatchers/cast";
import { loadImages } from "./dispatchers/images";
import { loadPeople} from "./dispatchers/people";

const api = "http://api.tvmaze.com/";
let all = {
  series:{},
  people:{},
  isFetching: true,
  isFetchingPeople: true,
  seriesName: ''
};

export function findShow(search) {
  all.seriesName = search;
  fetch(`${api}/search/shows?q=${search}`)
    .then(response => response.json())
    .then(json => {
      all.series = json;
      all.isFetching = false;
    });
    fetch(`${api}/search/people?q=${search}`)
    .then(response => response.json())
    .then(json => {
      all.people = json;
      all.isFetchingPeople = false;
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
          case "person":
            console.log("Load People");
            dispatch(loadPeople(id));
            break;
          default:
            break;
        }
      }
    });
  };
}
