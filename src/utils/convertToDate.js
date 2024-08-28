import moment from 'moment';

/**
 * This function converts a date represented by a number in the format YYYYMMDD into a Date object and its components.
 * @param {number|string} dateForecast - Assumes it is not null and is a valid date in numeric format (e.g., 20230828 for August 28, 2023).
 * @returns {{fullDate: moment.Moment, month: string, year: string, day: string}}
 */
export const convertToDate = (dateForecast) => {
    const dateStr = String(dateForecast);

    const fullDate = moment(dateStr, 'YYYYMMDD');

    return {
        fullDate: fullDate,
        year: fullDate.format('YYYY'),
        month: fullDate.format('MM'),
        day: fullDate.format('DD')
    };
};