import React from 'react';
import PropTypes from 'prop-types';

import { optionsWeather } from '../../helpers/types';
import { convertToDate } from '../../helpers/convertToDate';

/**
 * this component show date and forecast information
 * @param dataForecast - object get from api
 * @returns {JSX.Element}
 * @constructor
 */
export const InfoForecast = ({ dataForecast }) => {

    const { fullDate, year, month, day } = convertToDate( dataForecast.date );

    const { weather, winSpeed } = optionsWeather;

    return(
        <>
            <div className="card">
                <div className="card-header">
                    {
                        fullDate.toLocaleString('en-us', { weekday: 'short' })
                        + ' ' + fullDate.toLocaleString('en-us', { month: 'short' })
                        + ' ' + day + ' ' + year
                    }
                </div>
                <div className="card-body">
                    <p className="card-text">Weather: {weather[dataForecast.weather]}</p>
                    <p className="card-text">Temperatures: {dataForecast.temp2m.min}&#8451;
                        to {dataForecast.temp2m.max}&#8451;</p>
                    <p className="card-text">Wind conditions: { winSpeed[dataForecast.wind10m_max] }</p>
                </div>
            </div>
        </>
    );
}

InfoForecast.propTypes = {
    dataForecast: PropTypes.object.isRequired
}