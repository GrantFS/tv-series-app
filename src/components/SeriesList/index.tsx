import { Link } from 'react-router-dom';
import React from 'react';
import './index.css';
import { Show } from '../Show/interface';
interface Series {
  id: number;
  show: Show
}

interface SeriesProps {
  list: Series[];
}

const SeriesList = ({ list }: SeriesProps) => {
  const openItem = (e: any, show_id: number) => {
    e.preventDefault();
    window.location.href = `/series/${show_id}`;
  }

  return (
    <div className="series-list center">
      <ul>
          { list.map(series => (
              <li key={series.show.id}>
                <Link to={`/series/${series.show.id}`} onClick={(e) => { openItem(e, series.show.id)}}>
                  {series.show.name}
                </Link>
              </li>
          ))}
      </ul>
  </div>
  )
}

export default SeriesList;
