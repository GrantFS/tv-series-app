import React from 'react'
import { Link, useHistory } from 'react-router-dom';

interface HeaderProps {
    title: string;
}

const Header = ({title}: HeaderProps) => {
    const history = useHistory();
    const back = (e: any) => {
        e.preventDefault();
        history.goBack();
    };

    return (
        <header className="App-header">
          <h1>
            <Link to='/' onClick={back} >
              Back
            </Link>
            {title}
          </h1>
        </header>
    )
}

export default Header;
