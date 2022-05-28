import React from 'react';
import PropTypes from 'prop-types';

/**
 * list of locations in locations screen
 * @param name - string
 * @param removeLocation - function
 * @returns {JSX.Element}
 * @constructor
 */
export const LocationList = ({ name, removeLocation }) => {

    const handleClick = (e) => {
        e.preventDefault();
        removeLocation(e.target.parentNode.id);
    }

    return(
        <>
            <li className="list-group-item" key={name} id={name}>{ name }
                <button
                    type="button"
                    className="btn-close btn-danger float-end"
                    aria-label="Close"
                    onClick={handleClick}/>
            </li>
        </>
    );
}

LocationList.propTypes = {
    name: PropTypes.string.isRequired,
    removeLocation: PropTypes.func.isRequired
}