import React from 'react'
import {FormGroup, FormControl, ControlLabel} from 'react-bootstrap'

const formInput = (props) =>  {
    return (
        <FormGroup controlId={props.id} validationState={props.validationState}>
            <ControlLabel>{props.label}</ControlLabel>
            <FormControl type={props.type}
                         value={props.value}
                         placeholder={props.placeholder}
                         onChange={props.changeHandler}
                         />
            <FormControl.Feedback/>
        </FormGroup>
    )
}

export default formInput
