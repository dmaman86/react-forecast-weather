import React from 'react';
import PropTypes from 'prop-types';

/**
 * this component show a name from some location to display forecast
 * @param location - object
 * @param selected - function
 * @returns {JSX.Element}
 * @constructor
 */
export const LocationsListSelect = ({ location, selected }) => {

    const handleClick = async() => {
        selected(location);
    }

    return(
        <>
            <li
                type="button"
                id={location.name}
                className={"list-group-item" + (location.selected ? ' list-group-item-success' : '')}
                onClick={handleClick}
            >{ location.name }</li>
        </>
    );
}

LocationsListSelect.propTypes = {
    location: PropTypes.object.isRequired,
    selected: PropTypes.func.isRequired
}
