import PropTypes from 'prop-types';

import { convertToDate, optionsWeather } from '@/utils';

export const InfoForecast = ({ dataForecast }) => {

    const { fullDate } = convertToDate(dataForecast.date);
    const { weather, winSpeed } = optionsWeather;
    const formattedDate = fullDate.format('ddd MMM DD YYYY');

    return (
        <>
            <div className="card">
                <div className="card-header">
                    {formattedDate}
                </div>
                <div className="card-body">
                    <p className="card-text">Weather: {weather[dataForecast.weather]}</p>
                    <p className="card-text">
                        Temperatures: {dataForecast.temp2m.min}&#8451; to {dataForecast.temp2m.max}&#8451;
                    </p>
                    <p className="card-text">Wind conditions: {winSpeed[dataForecast.wind10m_max]}</p>
                </div>
            </div>
        </>
    )
}

InfoForecast.propTypes = {
    dataForecast: PropTypes.shape({
        date: PropTypes.number.isRequired,
        weather: PropTypes.string.isRequired,
        temp2m: PropTypes.shape({
            min: PropTypes.number.isRequired,
            max: PropTypes.number.isRequired
        }).isRequired,
        wind10m_max: PropTypes.number.isRequired
    }).isRequired
};