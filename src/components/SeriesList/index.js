import { Link } from 'react-router-dom';
import React, { Component } from '../../../node_modules/react';
import './index.css';

class SeriesList extends Component {
  render() {
    const { list } = this.props;
        return (
            <div className="series-list center">
              <ul>
                  { list.map(series => (
                      <li key={series.show.id}>
                        <Link to={`/series/${series.show.id}`} >
                          {series.show.name}
                        </Link>
                      </li>
                  ))}
              </ul>
          </div>
          )
    }
}

export default SeriesList;
