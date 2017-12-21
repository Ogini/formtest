import React from 'react'
import {FormGroup, FormControl, Checkbox} from 'react-bootstrap'

const formCheckbox = (props) =>  {
    return (
        <FormGroup validationState={props.validationState}>
            <Checkbox onChange={props.changeHandler} id={props.id}>
                {props.label}
            </Checkbox>
            <FormControl.Feedback/>
        </FormGroup>
    )
}

export default formCheckbox
