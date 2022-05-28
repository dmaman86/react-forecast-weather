import { useState } from 'react';

/**
 * hooks to manager locations was added to display forecast-weather
 * @param initialState
 * @returns {[*[], (function(*): boolean), removeLocation, handleFilter, (function(): *)]}
 */
export const useLocationSave = (initialState = []) => {

    const [ locations, setLocations ] = useState(initialState);

    /**
     * 
     * @returns a location was selected to display info
     */
    const getLocationSelect = () => {
        const select = locations.find( loc => loc?.selected === true);
        return (select !== undefined) ? select : {};
    }

    /**
     * this functions is to change background color
     * @param locationSelect (name string, latitude string,
     *                      longitude string, selected boolean,
     *                      render boolean)
     */
    const handleFilter = (locationSelect) => {
        const copy = [ ...locations ];
        copy.forEach( loc => {
            loc.selected = (loc?.name === locationSelect?.name);
        });
        setLocations( copy );
    }

    /**
     * this function is to add new location in array
     * @param newLocation (name string, latitude string,
     *                      longitude string, selected boolean,
     *                      render boolean)
     * @returns {boolean} if success
     */
    const addLocation = (newLocation) => {
        const found = locations.find( lc => lc.name === newLocation.name );
        if( !found ){
            const copy = [ ...locations, newLocation ];
            setLocations( copy );
        }
        return found;
    }

    /**
     * this function is to remove location from array
     * @param name of location, is unique
     */
    const removeLocation = (name) => {
        const found = locations.findIndex( lc => lc.name === name );
        if( found >= 0 ){
            const copy = [ ...locations ];
            copy.splice( found, 1 );
            setLocations( copy );
        }
    }

    return[ locations,
            addLocation,
            removeLocation,
            handleFilter,
            getLocationSelect ];
}