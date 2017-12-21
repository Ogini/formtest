import React from 'react'
import {FormGroup, FormControl, ControlLabel} from 'react-bootstrap'

const formSelect = (props) =>  {
    return (
        <FormGroup controlId={props.id} validationState={props.validationState}>
            <ControlLabel>{props.label}</ControlLabel>
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

export default formSelect