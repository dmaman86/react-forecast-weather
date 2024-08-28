
import PropTypes from 'prop-types';

import { RowForecastWeek } from './RowForecastWeek';

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
    dataForecast: PropTypes.arrayOf(
        PropTypes.shape({
            date: PropTypes.number.isRequired,
            weather: PropTypes.string.isRequired,
            temp2m: PropTypes.shape({
                min: PropTypes.number.isRequired,
                max: PropTypes.number.isRequired,
            }).isRequired,
            wind10m_max: PropTypes.number.isRequired,
        })
    ).isRequired
};