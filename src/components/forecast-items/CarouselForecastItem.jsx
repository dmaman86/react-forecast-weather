import { useState } from 'react';
import { Box, IconButton } from '@mui/material';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';
import PropTypes from 'prop-types';

import { InfoForecast } from '@/components';


export const CarouselForecastItem = ({ dataForecast }) => {

    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === dataForecast.length - 1 ? 0 : prevIndex + 1
        );
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? dataForecast.length - 1 : prevIndex - 1
        );
    };

    return (
        <Box position="relative" display="flex" alignItems="center">
            <IconButton onClick={handlePrev} sx={{ position: 'absolute', left: 0, zIndex: 1 }}>
                <ArrowBackIos />
            </IconButton>
            
            <Box flexGrow={1} display="flex" justifyContent="center">
                <InfoForecast dataForecast={dataForecast[currentIndex]} />
            </Box>
            
            <IconButton onClick={handleNext} sx={{ position: 'absolute', right: 0, zIndex: 1 }}>
                <ArrowForwardIos />
            </IconButton>
        </Box>
    );
}

CarouselForecastItem.propTypes = {
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