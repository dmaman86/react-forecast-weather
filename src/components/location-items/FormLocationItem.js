import React from 'react';
import PropTypes from 'prop-types';

import { useForm } from '../../hooks/useForm';
import { initialFormValues, errorValues } from '../../helpers/types';

/**
 * form component
 * @param addLocation - function
 * @returns {JSX.Element}
 * @constructor
 */
export const FormLocationItem = ({ addLocation }) => {

    const [ formValues,
            formErrors,
            handleInputChange,
            resetValues,
            resetErrors,
            validate ]
        = useForm({
        values: initialFormValues,
        errors: errorValues,
        addNewLocation: addLocation});

    const { nameLocation, latitudeLocation, longitudeLocation } = formValues;

    const { errorName, errorLatitude, errorLongitude, errorForm } = formErrors;

    const handleSubmit = async(e) => {
        e.preventDefault();

        if(validate()){
            resetErrors();
            resetValues();
        }
    }

    return(
        <>
            <form onSubmit={ handleSubmit }>
                <div className="mb-3">
                    <label htmlFor="nameLocationInput" className="form-label">Name:</label>
                    <input type="text"
                           className="form-control"
                           id="nameLocationInput"
                           name="nameLocation"
                            value={ nameLocation }
                            onChange={ (e) => handleInputChange(e, "nameLocation") }
                    />
                    {errorName && (<div className="text-danger errormessage">{errorName}</div>)}
                </div>
                <div className="mb-3">
                    <label htmlFor="latitudeLocationInput" className="form-label">Latitude:</label>
                    <input type="text"
                            className="form-control"
                            id="latitudeLocationInput"
                            name="latitudeLocation"
                            value={ latitudeLocation }
                            onChange={ (e) => handleInputChange(e, "latitudeLocation") }
                    />
                    {errorLatitude && <div className="text-danger errormessage">{errorLatitude}</div>}
                </div>
                <div className="mb-3">
                    <label htmlFor="longitudeLocationInput" className="form-label">Longitude:</label>
                    <input type="text"
                            className="form-control"
                            id="longitudeLocationInput"
                            name="longitudeLocation"
                            value={ longitudeLocation }
                            onChange={ (e) => handleInputChange(e, "longitudeLocation") }
                    />
                    {errorLongitude && <div className="text-danger errormessage">{errorLongitude}</div>}
                </div>
                <div className="d-grid gap-2">
                    <button className="btn btn-primary" type="submit">Add Location</button>
                    {errorForm && <div className="text-danger errormessage">{errorForm}</div>}
                </div>
            </form>
        </>
    );
}

FormLocationItem.propTypes = {
    addLocation: PropTypes.func.isRequired
}