import React from 'react';
import PropTypes from 'prop-types';

import { LocationList } from './LocationList';

/**
 * this component display list or message if list is empty
 * @param locations - array
 * @param removeLocation - function
 * @returns {JSX.Element}
 * @constructor
 */
export const Locations = ({ locations, removeLocation }) => {

    return(
        <>
            <h2>Locations:</h2>
                {
                    (!locations.length) ?
                        <p> (no locations yet...)</p> :
                        <ul className="list-group">
                            {
                                locations.map((loc, i) => (
                                    <LocationList
                                        key={i}
                                        name={loc.name}
                                        removeLocation={ removeLocation }/>
                            ))}
                        </ul>
                }
        </>
    );
}

Locations.propTypes = {
    locations: PropTypes.array.isRequired,
    removeLocation: PropTypes.func.isRequired
}