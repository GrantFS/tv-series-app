import React, { Component } from '../../../node_modules/react';
import SeriesList from '../../components/SeriesList';
import Loader from '../../components/Loader';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { ensureLoaded } from "../../store/actions";
import { findShow } from "../../store/actions";

class Series extends Component {
  state = {
    series: [],
    seriesName: '',
    isFetching: false
  }

  componentDidMount() {

  }

  onSeriesInputChange = e => {
    this.setState({ seriesName: e.target.value, isFetching: true });
    this.setState(findShow(e.target.value));
  }
  render() {
    const { series, seriesName, isFetching } = this.state;

    return (
      <div>
        <header className="App-header">
          <h1>
            TV Series
          </h1>
        </header>

        <div className="container">
          <div className="row">
            <div className="center">
              <input className="form-control search" value={seriesName} type="text" placeholder="Search..." onChange={this.onSeriesInputChange} />
            </div>
          </div>
        </div>
        <div className="found">
          Series Found:
          <span>
            &nbsp;{this.state.series.length}
          </span>
        </div>
        <div className="container">
          <div className="row">
            <div className="bordered">
              {
                !isFetching && series.length === 0 && seriesName.trim() === '' &&
                <p>
                  <Loader spin={false} />
                </p>
              }
              {
                !isFetching && series.length === 0 && seriesName.trim() !== '' &&
                <p>
                  No TV Series has been found!
                </p>
              }
              {
                isFetching && <Loader spin={true} />
              }
              {

                !isFetching && series.length > 0 && <SeriesList list={this.state.series} />
              }
            </div>
          </div>
        </div>
      </div>

    )
  }
}

function mapStoreToProps(store, passed) {
  return {
    params: passed.match.params,
  };
}

const mapDispatchToProps = dispatch => bindActionCreators({ ensureLoaded }, dispatch);

Series = connect(mapStoreToProps, mapDispatchToProps)(Series);


export default Series;
