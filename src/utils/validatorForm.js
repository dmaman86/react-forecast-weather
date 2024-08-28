
const isNotEmpty = (value) => {
    return value !== null && value !== undefined && value !== '';
}

export const validatorForm = (() => {

    const validateNotEmpty = (value) => {
        return {
            isValid: isNotEmpty(value),
            message: 'This field is required'
        }
    }

    const isCoordinate = (value) => {
        return {
            isValid: /^[+-]?\d+(\.\d+)?$/.test(value),
            message: 'Value must be a decimal number: only digits, a single ' +
            'minus and a single dot are allowed'
        }
    }

    const isInRange = (value, min, max) => {
        return {
            isValid: value >= min && value <= max,
            message: `Value must be between ${min} and ${max}`
        }
    }

    return {
        validateNotEmpty,
        isCoordinate,
        isInRange
    }

})();