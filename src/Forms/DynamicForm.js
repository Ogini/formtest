import { Component } from 'react'
import {validate} from './Validation'

class DynamicForm extends Component {
    constructor(props) {
        super(props)
        const initState = {}
        const {fields} = props
        for (const e of fields) {
            initState[e.id] = ''
        }
        this.state = initState
        this.changeHandler = this.changeHandler.bind(this)
        this.getValidationState = this.getValidationState.bind(this)
        this.isFormValid = this.isFormValid.bind(this)
    }

    getValidationState(validation, field) {
        return validate(validation, this.state[field]) ? 'success' : 'error'
    }

    isFormValid() {
        let valid = true
        const {fields} = this.props
        for (const e of fields) {
            if (!validate(e.validation, this.state[e.id])) {
                valid = false;
            }
        }

        return valid
    }

    changeHandler(event) {
        const value = event.target.value
        const {fields} = this.props
        const field = fields.find(a => a.id === event.target.id)
        const newState = {}
        const subtype = field.subtype || field.type
        switch (subtype) {
            case 'text':
            case 'password':
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
            default:
        }
    }
}

export default DynamicForm
