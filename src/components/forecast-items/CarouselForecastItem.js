import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { InfoForecast } from './InfoForecast';
import { WeekForecast } from './WeekForecast';

/**
 * cards like carousel forecast information
 * @param dataForecast - array
 * @returns {JSX.Element}
 * @constructor
 */
export const CarouselForecastItem  = ({ dataForecast }) => {

    const [ cardIndex, setCardIndex ] = useState(0);
    const [ weekButton, setWeekButton ] = useState(false);

    const nextCard = () => {
        const _cardIndex = cardIndex >= dataForecast.length -1 ? 0 : cardIndex + 1;
        setCardIndex( _cardIndex );
    };

    const prevCard = () => {
        const _cardIndex = cardIndex <= 0 ? dataForecast.length - 1 : cardIndex - 1;
        setCardIndex( _cardIndex );
    }

    const handleWeek = () => {
        setWeekButton( !weekButton );
    }

    return(
        <>
            <div className='cards'>
                <div className="d-grid gap-2 d-md-flex justify-content-md-center">
                    {
                        !weekButton &&
                            <>
                                <button type="button"
                                    className="btn btn-outline-dark btn-sm"
                                    onClick={prevCard}>
                                    Previous Day
                                </button>
                                <button type="button"
                                        className="btn btn-outline-dark btn-sm"
                                        onClick={nextCard}>
                                    Next Day
                                </button>
                            </>
                    }
                    <button type="button"
                            className="btn btn-outline-dark btn-sm"
                            onClick={handleWeek}>
                        7-Day Forecast { !weekButton ? ' show' : ' hide'}
                    </button>
                </div>
                {
                    !weekButton ? 
                        <div className='cards__item'>
                            <InfoForecast dataForecast={dataForecast[ cardIndex ]} />
                        </div>
                        : <WeekForecast dataForecast={dataForecast} />
                }
            </div>
        </>
    );
}

CarouselForecastItem.propTypes = {
    dataForecast: PropTypes.array.isRequired
}