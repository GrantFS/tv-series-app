import React, { Component } from '../../../node_modules/react';
import './index.css';

class SeriesList extends Component {
  openItem(e, show_id) {
    e.preventDefault();
    window.location = `/series/${show_id}`;
  }
  
  render() {
    const { list } = this.props;
        return (
            <div className="series-list center">
              <ul>
                  { list.map(series => (
                      <li key={series.show.id}>
                        <a href="/" onClick={(e) => {this.openItem(e, series.show.id)}}>
                            {series.show.name}
                        </a>
                      </li>
                  ))}
              </ul>
          </div>
          )
    }
}

export default SeriesList;
