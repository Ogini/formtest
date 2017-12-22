import React from 'react'
import PropTypes from 'prop-types'
import {FormGroup, FormControl, ControlLabel} from 'react-bootstrap'

const formSelect = (props) =>  {
    return (
        <FormGroup controlId={props.id} validationState={props.validationState}>
            {props.label ? <ControlLabel>{props.label}</ControlLabel> : null}
            <FormControl type={props.type}
                         componentClass='select'
                         value={props.value}
                         placeholder={props.placeholder}
                         onChange={props.changeHandler}
            >
                {props.options.map(opt => <option key={opt.value} value={opt.value}>{opt.name}</option>)}
            </FormControl>
            <FormControl.Feedback/>
        </FormGroup>
    )
}

formSelect.propTypes = {
    validationState: PropTypes.string.isRequired,
    changeHandler: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    options: PropTypes.arrayOf(PropTypes.object.isRequired),
    value: PropTypes.string,
    placeholder: PropTypes.string,
    label: PropTypes.string
}

export default formSelect