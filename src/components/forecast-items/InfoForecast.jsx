import { Card, CardContent, CardHeader, Typography, Box, Tooltip } from '@mui/material';
import PropTypes from 'prop-types';

import { convertToDate, optionsWeather } from '@/utils';

export const InfoForecast = ({ dataForecast }) => {

    const { fullDate } = convertToDate(dataForecast.date);
    const { weather, icons, winSpeed } = optionsWeather;
    const formattedDate = fullDate.format('ddd MMM DD YYYY');

    return (
        <Card sx={{ minWidth: 275, maxWidth: 400, margin: 'auto' }}>
            <CardHeader 
                title={formattedDate} 
                titleTypographyProps={{ align: 'center' }}
                sx={{ textAlign: 'center' }}
            />
            <CardContent>
                <Box display="flex" flexDirection="column" alignItems="center">
                    <Tooltip title={weather[dataForecast.weather]}>
                        <Box component="span" sx={{ fontSize: '3rem', marginBottom: '8px' }}>
                            {icons[dataForecast.weather]}
                        </Box>
                    </Tooltip>

                    <Typography variant="body1" align="center">
                        Maximum: {dataForecast.temp2m.max}&#8451;
                        Minimum: {dataForecast.temp2m.min}&#8451;
                    </Typography>

                    <Box display="flex" alignItems="center" marginTop="16px">
                        <Box component="span" sx={{ fontSize: '2rem', marginRight: '8px' }}>
                            {icons.wind}
                        </Box>
                        <Tooltip title={`Wind speed: ${winSpeed[dataForecast.wind10m_max]}`}>
                            <Typography variant="body2">
                                {winSpeed[dataForecast.wind10m_max]}
                            </Typography>
                        </Tooltip>
                    </Box>
                </Box>
            </CardContent>
        </Card>
    );

    /*return (
        <>
            <div className="card" style={{ maxWidth: '80%', margin: 'auto' }}>
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
    )*/
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