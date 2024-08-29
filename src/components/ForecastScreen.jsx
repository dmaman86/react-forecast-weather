import { useState } from "react";
import PropTypes from 'prop-types';

import { useFetch, useAsync } from "@/hooks";
import { service } from "@/utils";
import { weather, loadingData } from "@/assets";
import { CarouselForecastItem } from "@/components";

const LocationsListSelect = ({ location, onSelect, isSelected }) => {

    const handleClick = () => {
        onSelect(location);
    };

    return (
        <>
            <tr
                id={location.name}
                className={isSelected ? 'table-success' : ''}
                onClick={handleClick}
                style={{ cursor: 'pointer' }}
            >
                <td>{location.name}</td>
                <td>{location.latitude}</td>
                <td>{location.longitude}</td>
            </tr>
        </>
    )
}

LocationsListSelect.propTypes = {
    location: PropTypes.object.isRequired,
    onSelect: PropTypes.func.isRequired,
    isSelected: PropTypes.bool.isRequired,
};

export const ForecastScreen = ({ locations }) => {
    const [location, setLocation] = useState(null);
    const [dataForecast, setDataForecast] = useState(null);
    const { loading, callEndPoint } = useFetch();
    const [error, setError] = useState(null);

    const handleLocationChange = (selectedLocation) => {
        setLocation(selectedLocation);
        setDataForecast(null);
    }

    const fetchForecastData = async () => {
        if (location) {
            return await callEndPoint(service.getItem(`https://www.7timer.info/bin/api.pl?lon=${location.longitude}&lat=${location.latitude}&product=civillight&output=json`));
        }
        return Promise.resolve({ data: null, error: null });
    };

    const handleFetchForecastData = (result) => {
        if(location){
            console.log(result);
            if (result.error) {
                setError(result.error);
            } else {
                setDataForecast(result.data?.dataseries);
            }
        }
    }

    useAsync(fetchForecastData, handleFetchForecastData, () => {}, [location]);

    return (
        <>
            <div className="container p-3">
                <div className="row">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-body">
                                <h2 className="card-title">
                                    {!location && !dataForecast ? (
                                        "Please select a location to view the forecast"
                                    ) : error ? (
                                        `Error: ${error}`
                                    ) : (
                                        `Forecast: ${location?.name}`
                                    )}
                                </h2>
                            </div>
                            <div className="card-text">
                                {!location && !dataForecast ? (
                                    <img src={weather} className="rounded mx-auto d-block imageStyle" alt="logo weather" />
                                ) : loading ? (
                                    <img src={loadingData} className="rounded mx-auto d-block imageStyle" alt="wait until the page loads" />
                                ) : error ? (
                                    <img src={weather} className="rounded mx-auto d-block imageStyle" alt="logo weather" />
                                ) : location && dataForecast && (
                                    <CarouselForecastItem dataForecast={dataForecast} />
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="bg-secondary p-2 text-black bg-opacity-10 border rounded-3">
                            <form onSubmit={(e) => e.preventDefault()}>
                                <h2>Locations:</h2>
                                {!locations.length ? (
                                    <p>(no locations yet...)</p>
                                ) : (
                                    <>
                                        <table className="table">
                                            <thead>
                                                <tr>
                                                    <th scope="col">Name</th>
                                                    <th scope="col">Latitude</th>
                                                    <th scope="col">Longitude</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {locations.map((loc, i) => (
                                                    <LocationsListSelect 
                                                        key={i} 
                                                        location={loc} 
                                                        onSelect={handleLocationChange}
                                                        isSelected={loc.name === location?.name} />
                                                ))}
                                            </tbody>
                                        </table>
                                    </>
                                )}
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

ForecastScreen.propTypes = {
    locations: PropTypes.array.isRequired
};