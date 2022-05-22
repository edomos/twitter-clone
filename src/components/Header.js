import React from 'react';
import '../css/Header.css'
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';

const Header = (description) => {
    return (
        <div className="header__container">
            <h2>Home</h2>
            <AutoAwesomeIcon className="header__container--icon"/>
        </div>
    );
}

export default Header;
