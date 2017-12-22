import React from 'react'
// noinspection NpmUsedModulesInstalled
import PropTypes from 'prop-types'
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

formCheckbox.propTypes = {
    validationState: PropTypes.string.isRequired,
    changeHandler: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired
}

export default formCheckbox
