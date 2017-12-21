import React from 'react'
import {Form, Grid, Row, Col, Button} from 'react-bootstrap'
import FormInput from './Components/FormInput'
import FormSelect from './Components/FormSelect'
import FormCheckbox from './Components/FormCheckbox'
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

    render() {
        const {fields} = this.props
        // const username = fields.find(a => a.id === 'username')
        return (
            <Form>
                <Grid>
                    {fields.map(p => {
                        return (
                            <Row key={p.id}>
                                <Col lg={4} lgOffset={4}>
                                    {this.outputField(p)}
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
            </Form>
        )
    }
}

export default UserForm
