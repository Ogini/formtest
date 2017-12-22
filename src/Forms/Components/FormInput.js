import React from 'react'
import PropTypes from 'prop-types'
import {FormGroup, FormControl, ControlLabel} from 'react-bootstrap'

const formInput = (props) =>  {
    return (
        <FormGroup controlId={props.id} validationState={props.validationState}>
            {props.label ? <ControlLabel>{props.label}</ControlLabel> : null}
            <FormControl type={props.type}
                         value={props.value}
                         placeholder={props.placeholder}
                         onChange={props.changeHandler}
                         />
            <FormControl.Feedback/>
        </FormGroup>
    )
}

formInput.propTypes = {
    validationState: PropTypes.string.isRequired,
    changeHandler: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    value: PropTypes.string,
    placeholder: PropTypes.string,
    label: PropTypes.string
}

export default formInput
