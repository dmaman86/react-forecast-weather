import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { optionsWeather } from '../../helpers/types';
import { convertToDate } from '../../helpers/convertToDate';

/**
 * this component is to display forecast information from some day
 * @param forecast
 * @returns {JSX.Element}
 * @constructor
 */
export const RowForecastWeek = ({ forecast }) => {

    const [ opened, setOpened ] = useState(false);

    const { fullDate, year, month, day } = convertToDate( forecast.date );

    const { weather, winSpeed } = optionsWeather;

    const displayWeather = () => {
        setOpened( !opened );
    }

    return(
        <>
            <div className='row align-items-center'>
                <div className="col-12 pb-2 pb-lg-0 col-lg">
                    <strong>
                        {
                            fullDate.toLocaleString('en-us', { weekday: 'short' })
                            + ' ' + fullDate.toLocaleString('en-us', { month: 'short' })
                            + ' ' + day + ' ' + year
                        }
                    </strong>
                </div>
                <div className="col-6 col-lg">
                    <small className="d-lg-none mt-1">Temperatures<br/></small>
                    { forecast.temp2m.min }&#8451; to { forecast.temp2m.max }&#8451;
                    <div>
                        <p  type='button'
                            className="dropdown-toggle"
                            data-bs-toggle="dropdown"
                            onClick={displayWeather}>
                            <small className="mt-1">Weather Information</small>
                        </p>
                        {
                            opened &&
                            <p>{ weather[forecast.weather] }</p>
                        }
                    </div>
                </div>
                <div className="col-6 col-lg">
                    <small className="d-lg-none mt-1">Wind Conditions<br/></small>
                    { winSpeed[forecast.wind10m_max] }
                </div>
            </div>
            <hr/>
        </>
    );
}

RowForecastWeek.propTypes = {
    forecast: PropTypes.object.isRequired
}