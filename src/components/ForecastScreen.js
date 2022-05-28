import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { initialLocation } from '../helpers/types';
import { LocationsListSelect } from './forecast-items/LocationsListSelect';
import { CarouselForecastItem } from './forecast-items/CarouselForecastItem';
import { useFetch } from '../hooks/useFetch';
import weather from '../images/weather.png';
import loadingData from '../images/loadingData.gif';

/**
 * first screen to display forecast
 * @param locations array
 * @param toggleSelected function
 * @param getLocationSelect function
 * @returns {JSX.Element}
 * @constructor
 */
export const ForecastScreen = ({ locations, toggleSelected, getLocationSelect }) => {

    const [ location, setLocation ] = useState(initialLocation);

    const [ show, setShow ] = useState( null );

    let { dataImage, dataForecast, loading, error } = useFetch(show);

    useEffect( () => {
        return () => {
            location.selected = location.render = false;
            toggleSelected( location );
            setShow( null );
        }
    }, []);

    useEffect( () => {

        setLocation(getLocationSelect());

    }, [getLocationSelect]);

    useEffect( () => {

        if(location.render){
            location.render = false;
        }

    }, [location]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if( location.selected ){
            location.render = true;
            setShow( location );
        }    
    }

    return(
        <>
            <div className="row p-3">
                <div className={'col-md-' + (dataForecast ? '6' : '12')}>
                    <div className="card">
                        <div className="card-body">
                            <h2 className="card-title">Forecast: {show?.name}</h2>
                        </div>
                        <div className="text-center">
                            {
                                !show ?
                                    !(loading && error) &&
                                    <img src={weather} className="rounded mx-auto d-block imageStyle" alt="logo weather"/>
                                    : !error ?
                                        loading ? <img src={loadingData} className="rounded mx-auto d-block imageStyle" alt="wait until the page loads"/>
                                            : <img src={dataImage} className="rounded mx-auto d-block imageForecast" alt={`weather in ${show?.name}`}/>
                                        : <>
                                            <img src={weather} className="rounded mx-auto d-block imageStyle" alt="logo weather"/>
                                            <p>{error}</p>
                                        </>
                            }
                        </div>
                    </div>
                </div>
                {
                    (dataForecast && !error) &&
                    <div className="col-md-6 p-3">
                        <CarouselForecastItem dataForecast={dataForecast} />
                    </div>
                }
            </div>
            <br/>
            <div className="row">
                <div className='col-md-6'>
                    <div className="bg-secondary p-2 text-black bg-opacity-10 border rounded-3">
                        <form onSubmit={handleSubmit}>
                            <h2>Locations:</h2>
                            {
                                (!locations.length) ?
                                <p>(no locations yet...)</p> :
                                <>
                                    <ul className="list-group">
                                        {
                                            locations.map((loc, i) => (
                                                <LocationsListSelect
                                                    key={i}
                                                    location={loc}
                                                    selected={toggleSelected}
                                                />
                                            ))
                                        }
                                    </ul>
                                    <br/>
                                    <button
                                        type="submit"
                                        className='btn btn-primary'
                                        disabled={!location.selected}
                                    >
                                        Show Forecast
                                    </button>
                                </>
                            }
                        </form>
                    </div>
                </div>
                {
                    location.selected &&
                    <div className="col-md-4">
                        <div className="bg-secondary p-2 text-black bg-opacity-10 border rounded-3">
                            <h2>{location.name}</h2>
                            <p>Latitude: { location.latitude }</p>
                            <p>Longitude: { location.longitude }</p>
                        </div>
                    </div>
                }
            </div>
        </>
    );
}

ForecastScreen.propTypes = {
    locations: PropTypes.array.isRequired,
    toggleSelected: PropTypes.func.isRequired,
    getLocationSelect: PropTypes.func.isRequired
}