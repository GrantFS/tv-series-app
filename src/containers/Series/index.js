import React, { Component } from '../../../node_modules/react';
import SeriesList from '../../components/SeriesList';
import Loader from '../../components/Loader';
import { SearchContext } from '../../contexts/SearchContext';

class Series extends Component {

  static contextType = SearchContext

  render() {
    const { series, seriesName, isFetching } = this.context;


    return (
      <div>
        <header className="App-header">
          <h1>
            TV Series
          </h1>
        </header>


        <div className="found">
          Series Found:
          <span>
            &nbsp;{series.length}
          </span>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col">
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

                  !isFetching && series.length > 0 && <SeriesList list={series} />
                }
              </div>
            </div>
          </div>
        </div>
      </div>

    )
  }
}

export default Series;
