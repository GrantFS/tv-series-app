import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { SearchContext } from '../../contexts/SearchContext';
import AppBar from '@mui/material/AppBar';
import { Toolbar, Typography } from '@mui/material';
import LiveTvIcon from '@mui/icons-material/LiveTv';


const Navbar = () => {
    const context = useContext(SearchContext);
    const { onSeriesInputChange, onSeriesInputKeyDown } = context;

    return (
        <div>
            <AppBar position="static" sx={{ bgcolor: 'primary.main' }}>
                <Toolbar>
                    <Link to={`/`} >
                        <Typography variant="h6" component="div"  sx={{ color: 'common.white' }}>
                            <LiveTvIcon  sx={{ mr: 1 }} />
                            TV Series
                        </Typography>
                    </Link>
                </Toolbar>
            </AppBar>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">

                {/* <Link to={`/`} className="navbar-brand">
                    <span className="fas fa-tv" />
                    <span className="h4">
                        &nbsp; TV Series
                    </span>
                </Link> */}
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            {/* <Link to={`/`} className="nav-link">
                                Home <span className="sr-only">(current)</span>
                            </Link> */}
                        </li>
                    </ul>
                    <input className="form-control search"  type="text" placeholder="Search..." onChange={ onSeriesInputChange } onKeyDown={ onSeriesInputKeyDown} />
                </div>
            </nav>
        </div>
    )
}


export default Navbar

