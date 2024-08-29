import PropTypes from 'prop-types';

import { validatorForm } from '@/utils';
import { useForm } from '@/hooks';

export const FormLocationItem = ({ addItem }) => {

    const initialValues = {
        name: {
            value: '',
            validations: [ validatorForm.validateNotEmpty ]
        },
        latitude: {
            value: '',
            validations: [ validatorForm.validateNotEmpty, 
                            validatorForm.isCoordinate,
                            (value) => validatorForm.isInRange(value, -90, 90)]
        },
        longitude: {
            value: '',
            validations: [ validatorForm.validateNotEmpty, 
                            validatorForm.isCoordinate,
                            (value) => validatorForm.isInRange(value, -180, 180)]
        }
    };

    const { formState, errors, handleChange, handleFocus, validate } = useForm(initialValues);

    const handleSubmit = (e) => {
        e.preventDefault();

        if(validate()){
            addItem({
                name: formState.name.value,
                latitude: parseFloat(formState.latitude.value),
                longitude: parseFloat(formState.longitude.value)
            });
        }
    }

    return(
        <>
            <form onSubmit={ handleSubmit }>
                <div className="mb-3">
                    <label htmlFor="nameLocationInput" className="form-label">Name:</label>
                    <input type="text"
                           className="form-control"
                           name="name"
                            value={ formState.name.value }
                            onChange={ handleChange }
                            onFocus={ handleFocus }
                    />
                    {errors.name && errors.name.map((error, index) => (
                        <div key={index} className="text-danger">{error}</div>
                    ))}
                </div>
                <div className="mb-3">
                    <label htmlFor="latitudeLocationInput" className="form-label">Latitude:</label>
                    <input type="text"
                            className="form-control"
                            name="latitude"
                            value={ formState.latitude.value }
                            onChange={ handleChange }
                            onFocus={ handleFocus }
                    />
                    {errors.latitude && errors.latitude.map((error, index) => (
                        <div key={index} className="text-danger">{error}</div>
                    ))}
                </div>
                <div className="mb-3">
                    <label htmlFor="longitudeLocationInput" className="form-label">Longitude:</label>
                    <input type="text"
                            className="form-control"
                            name="longitude"
                            value={ formState.longitude.value }
                            onChange={ handleChange }
                            onFocus={ handleFocus }
                    />
                    {errors.longitude && errors.longitude.map((error, index) => (
                        <div key={index} className="text-danger">{error}</div>
                    ))}
                </div>
                <div className="d-grid gap-2">
                    <button className="btn btn-primary" type="submit">Save Location</button>
                </div>
            </form>
        </>
    );
}

FormLocationItem.propTypes = {
    addItem: PropTypes.func.isRequired
}