import React, { Component } from '../../../node_modules/react';
import SeriesList from '../../components/SeriesList';
import PersonList from '../../components/PersonList';
import Loader from '../../components/Loader';
import { SearchContext } from '../../contexts/SearchContext';

class Series extends Component {

  static contextType = SearchContext

  render() {
    const { series, people, seriesName, isFetching } = this.context;
    return (
      <div>
        <header className="App-header">
          <h1>
            TV Series
          </h1>
        </header>

        <div className="container-fluid">
          <div className="row">
            <div className="col">
              <div className="found">
                Series Found:
                <span>
                  &nbsp;{series.length}
                </span>
              </div>
            </div>
            <div className="col">
              <div className="found">
                Person Found:
                <span>
                  &nbsp;{people.length}
                </span>
              </div>
            </div>
          </div>

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





            <div className="col">
              <div className="bordered">
                {
                  !isFetching && people.length === 0 && seriesName.trim() === '' &&
                  <p>
                    <Loader spin={false} icon="fa-2x fa fa-users"/>
                  </p>
                }
                {
                  !isFetching && people.length === 0 && seriesName.trim() !== '' &&
                  <p>
                    No TV Series has been found!
                  </p>
                }
                {
                  isFetching && <Loader spin={true} />
                }
                {

                  !isFetching && people.length > 0 && <PersonList list={people} />
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
