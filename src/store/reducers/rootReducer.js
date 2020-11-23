import {combineReducers} from "redux";
import params from "./paramsReducer";
import show from "./showReducer";
import series from "./seriesReducer";
import seasons from "./seasonsReducer";
import cast from "./castReducer";
import images from "./imagesReducer";
import person from "./personReducer";

const rootReducer = combineReducers({
  params,
  show,
  series,
  seasons,
  cast,
  images,
  person
});

export default rootReducer;
