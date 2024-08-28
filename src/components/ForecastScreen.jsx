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
            <li
                type="button"
                id={location.name}
                className={`list-group-item${isSelected ? ' list-group-item-success' : ''}`}
                onClick={handleClick}
            >
                {location.name}
            </li>
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
    const [dataImage, setDataImage] = useState(null);
    const { loading, callEndPoint } = useFetch();
    const [error, setError] = useState(null);

    const handleLocationChange = (selectedLocation) => {
        setLocation(selectedLocation);
        setDataForecast(null);
        setDataImage(null);
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
                setDataImage(`https://www.7timer.info/bin/astro.php?lon=${ location.longitude }&lat=${ location.latitude }&ac=0&lang=en&unit=metric&output=internal&tzshift=0`);
            }
        }
    }

    useAsync(fetchForecastData, handleFetchForecastData, () => {}, [location]);

    return (
        <>
            <div className="container p-3">
                <div className="row p-3">
                    <div className={'col-md-' + (dataForecast ? '6' : '12')}>
                        <div className="card">
                            <div className="card-body">
                                <h2 className="card-title">Forecast: {location?.name}</h2>
                            </div>
                            <div className="text-center">
                                {!location ? (
                                    // No se ha elegido una ciudad, mostrar la imagen de clima predeterminada
                                    <img src={weather} className="rounded mx-auto d-block imageStyle" alt="logo weather" />
                                ) : loading ? (
                                    // Cargando datos, mostrar la imagen de carga
                                    <img src={loadingData} className="rounded mx-auto d-block imageStyle" alt="wait until the page loads" />
                                ) : error ? (
                                    // Hubo un error, mostrar la imagen de clima predeterminada y el mensaje de error
                                    <>
                                        <img src={weather} className="rounded mx-auto d-block imageStyle" alt="logo weather" />
                                        <p>{error}</p>
                                    </>
                                ) : (
                                    // Datos cargados correctamente, mostrar la imagen correspondiente al clima
                                    <img src={dataImage} className="rounded mx-auto d-block imageForecast" alt={`weather in ${location?.name}`} />
                                )}
                            </div>
                        </div>
                    </div>
                    {dataForecast && !error && (
                        <div className="col-md-6 p-3">
                            <CarouselForecastItem dataForecast={dataForecast} />
                        </div>
                    )}
                </div>
                <br />
                <div className="row">
                    <div className="col-md-6">
                        <div className="bg-secondary p-2 text-black bg-opacity-10 border rounded-3">
                            <form onSubmit={(e) => e.preventDefault()}>
                                <h2>Locations:</h2>
                                {!locations.length ? (
                                    <p>(no locations yet...)</p>
                                ) : (
                                    <>
                                        <ul className="list-group">
                                            {locations.map((loc, i) => (
                                                <LocationsListSelect 
                                                    key={i} 
                                                    location={loc} 
                                                    onSelect={handleLocationChange}
                                                    isSelected={loc.name === location?.name} />
                                            ))}
                                        </ul>
                                    </>
                                )}
                            </form>
                        </div>
                    </div>
                    {location && (
                        <div className="col-md-4">
                            <div className="bg-secondary p-2 text-black bg-opacity-10 border rounded-3">
                                <h2>{location.name}</h2>
                                <p>Latitude: {location.latitude}</p>
                                <p>Longitude: {location.longitude}</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

ForecastScreen.propTypes = {
    locations: PropTypes.array.isRequired
};