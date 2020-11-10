import React, { Component } from 'react'
import { findShow } from "../../store/actions";

export class Navbar extends Component {

    onSeriesInputChange = e => {
        this.setState({ seriesName: e.target.value, isFetching: true });
        this.setState(findShow(e.target.value));
      }

    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <a className="navbar-brand" href="#">
                        <span className="fas fa-tv" />
                        <span className="h4">
                            &nbsp; TV Series
                        </span>
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="#">
                                    Home <span className="sr-only">(current)</span>
                                </a>
                            </li>
                        </ul>
                        <input className="form-control search"  type="text" placeholder="Search..." onChange={this.onSeriesInputChange} />
                    </div>
                </nav>
            </div>
        )
    }
}

export default Navbar

