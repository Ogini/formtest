import React, {Component} from 'react'
import {Form, Grid, Row, Col, Button} from 'react-bootstrap'
import FormInput from './Components/FormInput'
import 'bootstrap/dist/css/bootstrap.min.css'
import { validate } from './Validation'

class UserForm extends Component {
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
    }

    getValidationState(validation, field) {
        return validate(validation, this.state[field]) ? 'success' : 'error'
    }

    changeHandler(event) {
        const value = event.target.value
        const {fields} = this.props
        const field = fields.find(a => a.id === event.target.id)
        const newState = {}
        switch (field.type) {
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

    buttonClickHandler() {

    }

    render() {
        const {fields} = this.props
        // const username = fields.find(a => a.id === 'username')
        return (
            <Grid>
                {fields.map(p => {
                    return (
                        <Row key={p.id}>
                            <Col lg={4} lgOffset={4}>
                                <Form>
                                    <FormInput label={p.label} value={this.state[p.id]}
                                               placeholder={p.placeholder} id={p.id}
                                               type={p.type === 'number' ? 'text' : p.type}
                                               validationState={this.getValidationState(p.validation, p.id)}
                                               changeHandler={this.changeHandler}/>
                                </Form>
                            </Col>
                        </Row>
                    )
                })}
                {/*
                <Row key={username.id}>
                    <Col lg={4} lgOffset={4}>
                        <Form>
                            <FormInput label={username.label} value={this.state[username.id]}
                                       placeHolder={username.placeholder} id={username.id}
                                       type={username.type}
                                       validationState={this.getValidationState(username.validation, username.id)}
                                       changeHandler={this.changeHandler}/>
                        </Form>
                    </Col>
                </Row>
                */}

                <Row>
                    <Col lg={1} lgOffset={4}>
                        <Button onClick={this.buttonClickHandler}>Save</Button>
                    </Col>
                </Row>
            </Grid>
        )
    }
}

export default UserForm
