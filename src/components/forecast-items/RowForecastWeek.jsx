import { useState } from 'react';
import PropTypes from 'prop-types';

import { convertToDate, optionsWeather } from '@/utils';

export const RowForecastWeek = ({ forecast }) => {

    const [opened, setOpened] = useState(false);

    const { fullDate } = convertToDate(forecast.date);
    const { weather, winSpeed } = optionsWeather;
    const formattedDate = fullDate.format('ddd MMM DD YYYY');

    const displayWeather = () => {
        setOpened(!opened);
    };

    return(
        <>
            <div className="row align-items-center">
                <div className="col-12 pb-2 pb-lg-0 col-lg">
                    <strong>{formattedDate}</strong>
                </div>
                <div className="col-6 col-lg">
                    <small className="d-lg-none mt-1">Temperatures<br /></small>
                    {forecast.temp2m.min}&#8451; to {forecast.temp2m.max}&#8451;
                    <div>
                        <p
                            type="button"
                            className="dropdown-toggle"
                            data-bs-toggle="dropdown"
                            onClick={displayWeather}>
                            <small className="mt-1">Weather Information</small>
                        </p>
                        {opened && <p>{weather[forecast.weather]}</p>}
                    </div>
                </div>
                <div className="col-6 col-lg">
                    <small className="d-lg-none mt-1">Wind Conditions<br /></small>
                    {winSpeed[forecast.wind10m_max]}
                </div>
            </div>
            <hr />
        </>
    );
}

RowForecastWeek.propTypes = {
    forecast: PropTypes.shape({
        date: PropTypes.number.isRequired,
        weather: PropTypes.string.isRequired,
        temp2m: PropTypes.shape({
            min: PropTypes.number.isRequired,
            max: PropTypes.number.isRequired
        }).isRequired,
        wind10m_max: PropTypes.number.isRequired
    }).isRequired
};