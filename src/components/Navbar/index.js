import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { SearchContext } from '../../contexts/SearchContext';

export class Navbar extends Component {
    static contextType = SearchContext
    render() {
        const { onSeriesInputChange } = this.context;
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">

                    <Link to={`/`} className="navbar-brand">
                        <span className="fas fa-tv" />
                        <span className="h4">
                            &nbsp; TV Series
                        </span>
                    </Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <Link to={`/`} className="nav-link">
                                    Home <span className="sr-only">(current)</span>
                                </Link>
                            </li>
                        </ul>
                        <input className="form-control search"  type="text" placeholder="Search..." onChange={ onSeriesInputChange } />
                    </div>
                </nav>
            </div>
        )
    }
}

export default Navbar

