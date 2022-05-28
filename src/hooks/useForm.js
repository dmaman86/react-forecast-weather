import { useState } from 'react';
import { validatorForm } from '../helpers/validatorForm'

/**
 * hooks to manager form to add new location
 * @param options
 * @returns {unknown[]}
 */
export const useForm = ( options ) => {

    const [values, setValues] = useState(options.values);
    const [ errors, setErrors ] = useState(options.errors);

    const resetErrors = () => {
        setErrors( options.errors );
    }

    const resetValues = () => {
        setValues(options.values);
    }

    /**
     * this function get event and item key to save and display
     * @param e event
     * @param item key of field
     */
    const handleInputChange = (e, item) => {
        const updateObject = { ...values };
        updateObject[item] = e.target.value;
        setValues(updateObject);
    }

    /**
     * this function validate if current location not
     * exist in array of locations
     * @returns {boolean}
     */
    const validate = () => {
        sanitizeValues();
        return validatorForm.validate( values,
                                       options.addNewLocation,
                                       setErrors );
    }

    const sanitizeValues = () => {
        values.nameLocation = values.nameLocation.trim();
        values.latitudeLocation = values.latitudeLocation.trim();
        values.longitudeLocation = values.longitudeLocation.trim();
    }

    return [ values,
             errors,
             handleInputChange,
             resetValues,
             resetErrors,
             validate ];
}