import React, { createContext, Component } from 'react';
import { findShow } from "../store/actions";
import {withRouter} from 'react-router-dom';


export const SearchContext = createContext();


class SearchContextProvider extends Component {
  state = {
    series: [],
    seriesName: '',
    isFetching: false
  }
  onSeriesInputChange = e => {
    this.setState({ seriesName: e.target.value, isFetching: true });
    this.setState(findShow(e.target.value));
  }
  onSeriesInputKeyDown = e => {
    if (e.key === 'Enter') {
      this.setState({ seriesName: e.target.value, isFetching: true });
      this.setState(findShow(e.target.value));
      this.props.history.push({
        pathname:"/",
        state:findShow(e.target.value)
       });
    }

  }
  render() {
    return (
      <SearchContext.Provider value={{ ...this.state, onSeriesInputChange: this.onSeriesInputChange, onSeriesInputKeyDown: this.onSeriesInputKeyDown }}>
        { this.props.children}
      </SearchContext.Provider>
    )
  }
}

export default withRouter(SearchContextProvider)

