import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { SearchContext } from '../../contexts/SearchContext';
import AppBar from '@mui/material/AppBar';
import { Grid, Toolbar, Typography } from '@mui/material';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import { styled, alpha } from '@mui/material/styles';



const Navbar = () => {
    const context = useContext(SearchContext);
    const { onSeriesInputChange, onSeriesInputKeyDown } = context;
    const Search = styled('div')(({ theme }) => ({
        position: 'relative',
        margin: "1rem 0",
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
          backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
          marginLeft: theme.spacing(3),
          width: 'auto',
        },
      }));

      const SearchIconWrapper = styled('div')(({ theme }) => ({
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }));

      const StyledInputBase = styled(InputBase)(({ theme }) => ({
        color: 'inherit',
        '& .MuiInputBase-input': {
          padding: theme.spacing(1, 1, 1, 0),
          paddingLeft: `calc(1em + ${theme.spacing(4)})`,
          transition: theme.transitions.create('width'),
          width: '100%',
          [theme.breakpoints.up('md')]: {
            width: '20ch',
          },
        },
      }));

    return (
        <div>
            <AppBar position="static" sx={{ bgcolor: 'primary.main' }}>
                <Toolbar>
                    <Grid container spacing={1}>
                        <Grid item xs={12} md={2}>
                            <Link to={`/`} >
                                <Typography variant="h5" component="h1"  sx={{ margin: "1rem 0", textAlign: { xs: 'center', sm: 'center', md: 'left' }, color: 'common.white' }}>
                                    <LiveTvIcon sx={{ mr: 1, display: { xs: 'none', sm: 'none', md: 'inline-block' } }} />
                                    TV Series
                                </Typography>
                            </Link>
                        </Grid>
                        <Grid item xs={12} md={6} xl={8}>
                            <Link to={`/`} className="nav-link">
                                Home <span className="sr-only">(current)</span>
                            </Link>
                        </Grid>
                        <Grid item xs={12} md={4} xl={2}>
                            <Search>
                                <SearchIconWrapper>
                                    <SearchIcon />
                                </SearchIconWrapper>
                                <StyledInputBase
                                    className="search"
                                    placeholder="Search…"
                                    inputProps={{ 'aria-label': 'search' }}
                                    onChange={ onSeriesInputChange }
                                    onKeyDown={ onSeriesInputKeyDown}
                                />
                            </Search>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
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

                        </li>
                    </ul>
                    <input className="form-control search"  type="text" placeholder="Search..." onChange={ onSeriesInputChange } onKeyDown={ onSeriesInputKeyDown} />
                </div>
            </nav>
        </div>
    )
}


export default Navbar

