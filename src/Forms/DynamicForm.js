import React, { Component } from 'react'
import {validate} from './Validation'
import FormInput from './Components/FormInput'
import FormSelect from './Components/FormSelect'
import FormCheckbox from './Components/FormCheckbox'
import PropTypes from 'prop-types'

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
        this.outputField = this.outputField.bind(this)
    }

    outputField(p) {
        switch (p.type) {
            case 'text':
            case 'password':
                return (
                    <FormInput label={p.label} value={this.state[p.id]}
                               placeholder={p.placeholder} id={p.id}
                               type={p.type}
                               validationState={this.getValidationState(p.validation, p.id)}
                               changeHandler={this.changeHandler}/>
                )
            case 'select':
                return (
                    <FormSelect label={p.label} value={this.state[p.id]}
                                placeholder={p.placeholder} id={p.id}
                                type={p.type} options={p.options}
                                validationState={this.getValidationState(p.validation, p.id)}
                                changeHandler={this.changeHandler}/>
                )
            case 'checkbox':
                return (
                    <FormCheckbox label={p.label} value={this.state[p.id]} id={p.id}
                                  validationState={this.getValidationState(p.validation, p.id)}
                                  changeHandler={this.changeHandler}/>
                )
            default:
                return null
        }
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

DynamicForm.propTypes = {
    fields: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            label: PropTypes.string,
            placeholder: PropTypes.string,
            type: PropTypes.string.isRequired,
            subtype: PropTypes.string,
            validation: PropTypes.arrayOf(PropTypes.string),
            options: PropTypes.arrayOf(PropTypes.object)
        })
    )
}


export default DynamicForm
