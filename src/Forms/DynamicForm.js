import { Component } from 'react'
import {validate} from './Validation'

class DynamicForm extends Component {
    constructor(props) {
        super(props)
        const initState = {}
        const {fields} = props
        for (const e of fields) {
            initState[e.id] = e.default || ''
        }
        this.state = initState
        this.changeHandler = this.changeHandler.bind(this)
        this.getValidationState = this.getValidationState.bind(this)
        this.isFormValid = this.isFormValid.bind(this)
    }

    getValidationState(validation, field) {
        validation = validation || []
        if (validation.length === 0) return 'success'
        return validate(validation, this.state[field]) ? 'success' : 'error'
    }

    isFormValid() {
        let valid = true
        const {fields} = this.props
        for (const e of fields) {
            const evaluate = e.validation || []
            if (evaluate.length > 0 && !validate(evaluate, this.state[e.id])) {
                valid = false;
            }
        }

        return valid
    }

    changeHandler(event) {
        let value = event.target.value
        const {fields} = this.props
        const field = fields.find(a => a.id === event.target.id)
        const newState = {}
        const subtype = field.subtype || field.type
        switch (subtype) {
            case 'text':
            case 'password':
            case 'select':
                newState[field.id] = value
                this.setState(newState)
                break
            case 'number':
                newState[field.id] = parseInt(value, 10)
                if (isNaN(newState[field.id])) {
                    if (value === '' || value === '-') {
                        newState[field.id] = value
                        this.setState(newState)
                    }
                } else if (newState[field.id] <= Number.MAX_SAFE_INTEGER && newState[field.id] >= Number.MIN_SAFE_INTEGER) {
                    this.setState(newState)
                }
                break
            case 'checkbox':
                if (!event.target.checked) {
                    value = ''
                }
                newState[field.id] = value
                this.setState(newState)
                break
            default:
        }
    }
}

export default DynamicForm
