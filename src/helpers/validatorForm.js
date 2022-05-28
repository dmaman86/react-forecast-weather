
export const validatorForm = (() => {
    /**
     *
     * @param values location values form
     * @param addLocationFunction function
     * @param setErrors function
     * @returns {boolean}
     */
    const validate = (values, addLocationFunction, setErrors) => {
        let errorName = validateNotEmpty(values.nameLocation, 'Name');
        let errorLatitude = validateNotEmpty(values.latitudeLocation, 'Latitude');
        let errorLongitude = validateNotEmpty(values.longitudeLocation, 'Longitude');
        let errorForm;

        if(!errorLatitude)
            errorLatitude = isCoordinate(values.latitudeLocation);
        if(!errorLongitude)
            errorLongitude = isCoordinate(values.longitudeLocation);

        if(!errorLatitude)
            errorLatitude = isInRange(values.latitudeLocation, -90.0, 90.0);
        if(!errorLongitude)
            errorLongitude = isInRange(values.longitudeLocation, -180.0, 180.0);

        if(!(errorName || errorLatitude || errorLongitude)){
            errorForm = ifExistLocation({ name: values.nameLocation,
                                                latitude: values.latitudeLocation,
                                                longitude: values.longitudeLocation,
                                                selected: false, render: false},
                                                addLocationFunction);
        }

        if(errorName || errorLatitude || errorLongitude || errorForm){
            setErrors({ errorName, errorLatitude, errorLongitude, errorForm });
            return false;
        }
        return true;
    }

    /**
     * function to validate values is not empty
     * @param value get from form
     * @param item field in form
     * @returns {string|string} possible error
     */
    const validateNotEmpty = (value, item) => {
        return (!value) ? `${ item } is required` : '';
    }

    /**
     * this function if a values is a double
     * @param value field input
     * @returns {string|string} possible error
     */
    const isCoordinate = (value) => {
        return (/^[+-]?\d+(\.\d+)?$/.test(value) === false) ?
            'Value must be a decimal number: only digits, a single ' +
            'minus and a single dot are allowed' : '';
    }

    /**
     * this function if a value is in range of latitude/longitude
     * @param value latitude/longitude
     * @param min   minimum latitude/longitude value
     * @param max   maximum latitude/longitude value
     * @returns {string|string} possible error
     */
    const isInRange = (value, min, max) => {
        return (!(value >= min && value <= max)) ?
            `Value must be a decimal between ${ min } and ${ max }` : '';
    }

    /**
     * this function validate if this locations exist in array locations
     * @param location
     * @param funcAdd
     * @returns {string}
     */
    const ifExistLocation = (location, funcAdd) => {
        return ((funcAdd(location))) ? 'This locations was added.' : '';
    }

    return{
        validate
    }
})();