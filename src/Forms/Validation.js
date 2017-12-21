/**
 * Validate By Minimum String Length
 *
 * @param value
 * @param length
 * @returns {boolean}
 */
const validateByMinLength = (value, length) => {
    length = parseInt(length, 10)
    return value.length >= length
}

/**
 * Validate by Maximum String Length
 *
 * @param value
 * @param length
 * @returns {boolean}
 */
const validateByMaxLength = (value, length) => {
    length = parseInt(length, 10)
    return value.length <= length
}

/**
 * Validate Password
 *
 * @param value
 * @param config
 * @returns {boolean}
 */
const validatePassword = (value, config) => {
    return true
}

/**
 * Validate as Number
 *
 * @param value
 * @param config
 * @returns {boolean}
 */
const validateNumber = (value, config) => {
    return typeof value === 'number' && value <= Number.MAX_SAFE_INTEGER && value >= Number.MIN_SAFE_INTEGER
}

/**
 * Validate Value using Validations
 * @param validations
 * @param value
 * @returns {boolean}
 */
export const validate = (validations, value) => {
    let valid = true

    validations.forEach(v => {
        const config = v.split(':')
        let validation = config.shift()
        switch (validation) {
            case 'minlength':
                if (!validateByMinLength(value, config[0])) {
                    valid = false
                }
                break
            case 'maxlength':
                if (!validateByMaxLength(value, config[0])) {
                    valid = false
                }
                break
            case 'password':
                if (!validatePassword(value, config)) {
                    valid = false
                }
                break
            case 'number':
                if (!validateNumber(value, config)) {
                    valid = false
                }
                break
            // Fail unknown validations
            default:
                valid = false
        }
    })

    return valid
}