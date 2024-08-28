import { NavLink, Link } from "react-router-dom";
import { weather } from '@/assets';

export const HeaderItem = () => {

    const getNavLinkClass = (isActive) => 'nav-link ' + (isActive ? 'active' : '');


    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <Link to="/forecast" className='navbar-brand'>
                        <img src={ weather } alt="weather logo" width="30" height="24"
                                        className="d-inline-block align-text-top"/>
                        My Weather Forecast
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                        >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink to="/forecast" className={({ isActive }) => getNavLinkClass(isActive)}>
                                    Forecast
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/locations" className={({ isActive }) => getNavLinkClass(isActive)}>
                                    Locations
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}