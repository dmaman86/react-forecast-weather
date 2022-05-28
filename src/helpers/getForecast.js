import axios from 'axios';

export const getForecast = async(location) => {

    const url = `http://www.7timer.info/bin/api.pl?lon=${location.longitude}&lat=${location.latitude}&product=civillight&output=json`;
    const urlImage = `http://www.7timer.info/bin/astro.php?lon=${ location.longitude }&lat=${ location.latitude }&ac=0&lang=en&unit=metric&output=internal&tzshift=0`;

    const invalidLocation = 'ERROR: no geographic location specified';
    const errorServer = 'weather forecast service is not available right now, please try again later.';

    return await axios.get( url )
            .then( res => {
                return {
                    dataImage: urlImage,
                    dataForecast: res.data.dataseries ? res.data.dataseries : null,
                    loading: false,
                    error: res.data.dataseries ? null : invalidLocation
                }
            })
            .catch( error => {
                return {
                    dataImage: null,
                    dataForecast: null,
                    loading: false,
                    error: errorServer
                }
            })

}