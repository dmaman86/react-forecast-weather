/**
 * this function convert date by number in date format
 * @param dateForecast - assume is not null and is validate date like number
 * @returns {{fullDate: Date, month: number, year: string, day: string}}
 */
export const convertToDate = ( dateForecast ) => {

    const date = String(dateForecast).replace(
        /(\d\d\d\d)(\d\d)(\d\d)/, '$1-$2-$3'
    );
    const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(date);
    const year = match[ 1 ];
    const month = match[ 2 ] - 1;
    const day = match[ 3 ];
    const full = new Date(year, month, day);

    return{
        fullDate: full,
        year: year,
        month: month,
        day: day
    }
}