import React from 'react'
import {Form, Grid} from 'react-bootstrap'

const bootstrapForm = (props) => <Form><Grid>{props.children}</Grid></Form>

export default bootstrapForm
