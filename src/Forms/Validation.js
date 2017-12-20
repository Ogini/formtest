const validateByMinLength = (length, value) => {
    length = parseInt(length, 10)
    if (value.length >= length) {
        return true
    }

    return false
}

const validateByMaxLength = (length, value) => {
    length = parseInt(length, 10)
    if (value.length <= length) {
        return true
    }

    return false
}

const validatePassword = (config, value) => {
    return true
}

const validateNumber = (config, value) => {
    if (typeof value === 'number' && value <= Number.MAX_SAFE_INTEGER && value >= Number.MIN_SAFE_INTEGER) return true
    return false
}

export const validate = (validations, value) => {
    let valid = true

    validations.forEach(v => {
        const config = v.split(':')
        let validation = config.shift()
        switch (validation) {
            case 'minlength':
                if (!validateByMinLength(config[0], value)) {
                    valid = false;
                }
                break
            case 'maxlength':
                if (!validateByMaxLength(config[0], value)) {
                    valid = false;
                }
                break
            case 'password':
                if (!validatePassword(config, value)) {
                    valid = false;
                }
                break
            case 'number':
                if (!validateNumber(config, value)) {
                    valid = false;
                }
                break
            default:
                valid = false
        }
    })

    return valid
}