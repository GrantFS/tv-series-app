import React, { Component } from '../../../node_modules/react';
import Loader from '../../components/Loader';
import Show from '../../components/Show/index.tsx';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { ensureLoaded } from "../../store/actions";
import { withRouter } from 'react-router-dom';

class SingleSeries extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.ensureLoaded([
      { id: id, name: "series" }
    ]);
  }

  render() {

    const { series } = this.props;
    let isLoaded = false;
    if (this.props.isLoaded) {
      isLoaded = true;
    }

    return (
      <div>
        {!isLoaded &&
          <div>
            <header className="App-header">
              <h1>
                TV Series
              </h1>
            </header>
            <div className="container">
              <div className="row">
                <Loader spin={true} />
              </div>
            </div>
          </div>
        }
        {
          isLoaded && series !== null &&
          <div>
            <Show show={series} />
          </div>
        }

      </div>
    )
  }
}
function mapStoreToProps(store, passed) {
  return {
    params: passed.match.params,
    series: store.series.data,
    isLoaded: store.series.isLoaded
  };
}

const mapDispatchToProps = dispatch => bindActionCreators({ ensureLoaded }, dispatch);

SingleSeries = connect(mapStoreToProps, mapDispatchToProps)(SingleSeries);


export default withRouter(SingleSeries);
