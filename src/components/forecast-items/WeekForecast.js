import React from 'react';
import PropTypes from 'prop-types';

import { RowForecastWeek } from './RowForecastWeek';

/**
 * this component is to show next 7 days forecast
 * @param dataForecast - array
 * @returns {JSX.Element}
 * @constructor
 */
export const WeekForecast = ({ dataForecast }) => {

    return(
        <>
            <div className='container p-3'>
                <div className='border rounded-3 bg-light text-center'>
                    <ul className='list-group'>
                        <ul className='list-group-item list-gruop-item-action d-none d-lg-inline block border-bottom'>
                            <div className='row'>
                                <div className='col-lg'><strong>Date</strong></div>
                                <div className='col-lg'><strong>Temperatures</strong></div>
                                <div className='col-lg'><strong>Wind Conditions</strong></div>
                            </div>
                        </ul>
                        {
                            dataForecast.map( (forecast, i) => (
                                <RowForecastWeek
                                    key={i}
                                    forecast={forecast}
                                />
                            ))
                        }
                    </ul>
                </div>
            </div>
        </>
    );
}

WeekForecast.propTypes = {
    dataForecast: PropTypes.array.isRequired
}