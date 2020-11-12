import React, { createContext, Component } from 'react';
import { findShow } from "../store/actions";

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
  render() {
    return (
      <SearchContext.Provider value={{ ...this.state, onSeriesInputChange: this.onSeriesInputChange }}>
        { this.props.children}
      </SearchContext.Provider>
    )
  }
}

export default SearchContextProvider

