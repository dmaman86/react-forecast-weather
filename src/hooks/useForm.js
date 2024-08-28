import { useState, useCallback } from "react";

const validateField = (field) => {
    const fieldErrors = [];

    for(const validation of field.validations){
        const result = validation(field.value.trim());
        if(!result.isValid){
            fieldErrors.push(result.message);
        }
    }
    return fieldErrors;
}

const validateForm = (formState) => {
    const validationErrors = {};
    let hasErrors = false;

    for(const name in formState){
        const fieldErrors = validateField(formState[name]);
        if(fieldErrors.length){
            validationErrors[name] = fieldErrors;
            hasErrors = true;
        }
    }

    return { validationErrors, hasErrors };
}

export const useForm = (initialValues = {}) => {

    const [ formState, setFormState ] = useState(initialValues);
    const [ errors, setErrors ] = useState({});

    const handleChange = useCallback((e) => {
        const { name, value } = e.target;
        setFormState(prevFormState => ({
            ...prevFormState,
            [name]: {
                ...prevFormState[name],
                value
            }
        }));
    }, []);

    const handleFocus = useCallback((e) => {
        const { name } = e.target;
        setErrors(prevErrors => ({
            ...prevErrors,
            [name]: []
        }));
    }, []);

    const validate = useCallback(() => {
        const { validationErrors, hasErrors } = validateForm(formState);
        setErrors(validationErrors);
        return !hasErrors;
    }, [formState]);

    return {
        formState,
        errors,
        handleChange,
        handleFocus,
        validate
    }
}