import React from 'react';
import PropTypes from 'prop-types';

import { FormLocationItem } from './location-items/FormLocationItem';
import { Locations } from './location-items/Locations';

/**
 * locations screen - second screen in app
 * @param locations - array
 * @param addLocation - function
 * @param removeLocation - function
 * @returns {JSX.Element} - to display
 * @constructor
 */
export const LocationsScreen = ({ locations, addLocation, removeLocation }) => {

    return(
        <>
            <br />
            <div className='row'>
                <div className='col-md-4'>
                    <div className='container p-3'>
                        <div className="row align-items-center">
                            <div className="bg-secondary p-2 text-black bg-opacity-10 border rounded-3">
                                <Locations
                                    locations={locations}
                                    removeLocation={removeLocation}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-md-8'>
                    <div className='container p-3'>
                        <div className="row align-items-center">
                            <h2>Add Location:</h2>
                            <div className="bg-secondary p-2 text-black bg-opacity-10 border rounded-3">
                                <FormLocationItem addLocation={ addLocation }/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

LocationsScreen.propTypes = {
    locations: PropTypes.array.isRequired,
    addLocation: PropTypes.func.isRequired,
    removeLocation: PropTypes.func.isRequired
}