import React from 'react';
import { Outlet, NavLink, Link } from 'react-router-dom';
import weather from '../images/weather.png';

/**
 * title and dashboard app
 * @returns {JSX.Element}
 * @constructor
 */
export const HeaderItem = () => {

    return(
        <>
            <nav className="navbar navbar-light bg-light">
                <Link to="/forecast" className='navbar-brand'>
                    <img src={ weather } alt="weather logo" width="30" height="24"
                            className="d-inline-block align-text-top"/>
                    My Weather Forecast
                </Link>
            </nav>
            <br />
            <ul className="nav nav-tabs">
                <li className="nav-item">
                    <NavLink
                        to="/forecast"
                        className={ ({ isActive }) => 'nav-link ' + ( isActive ? 'active' : '')}
                    >
                        Forecast
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink
                        to="/locations"
                        className={ ({ isActive }) => 'nav-link ' + ( isActive ? 'active' : '')}
                    >
                    Locations
                    </NavLink>
                </li>
            </ul>
            <div className="container-fluid">
                <Outlet />
            </div>
        </>
    );
};