import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import { ForecastScreen } from './components/ForecastScreen';
import { LocationsScreen } from './components/LocationsScreen';
import { HeaderItem } from './components/HeaderItem'
import { useLocationSave } from './hooks/useLocationSave';


export const App = ({ defaultLocations = [] }) => {

    /**
     * variables to manager locations forecast weather
     * locations = []
     * addLocation, removeLocations, toggleSelected, getLocationSelect = functions
     */
    const [ locations, addLocation, removeLocation, toggleSelected, getLocationSelect ] = useLocationSave(defaultLocations);

    return(
        <>
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={<HeaderItem />}>
                        <Route path="forecast" 
                                element={<ForecastScreen
                                            locations={locations}
                                            toggleSelected={toggleSelected}
                                            getLocationSelect={getLocationSelect}/>}
                        />
                        <Route path="locations" 
                                element={<LocationsScreen
                                            locations={locations}
                                            addLocation={addLocation}
                                            removeLocation={removeLocation}/>}
                        />

                        <Route path="/" element={<Navigate to="forecast" replace />} />
                        <Route path="*" element={<Navigate to="forecast" replace />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}