import React from 'react'
import {Form, Grid, Row, Col, Button} from 'react-bootstrap'
import FormInput from './Components/FormInput'
import 'bootstrap/dist/css/bootstrap.min.css'
import DynamicForm from './DynamicForm'

class UserForm extends DynamicForm {
    constructor(props) {
        super(props)
        this.buttonClickHandler = this.buttonClickHandler.bind(this)
    }

    buttonClickHandler() {
        console.log(this.isFormValid())
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
                                               type={p.type}
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
