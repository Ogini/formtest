import React from 'react'
import {Row, Col, Button} from 'react-bootstrap'
import DynamicForm from './DynamicForm'
import BootstrapForm from './Layouts/BootstrapForm'
import TwoColumn from './Layouts/TwoColumn'
import 'bootstrap/dist/css/bootstrap.min.css'

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
        return (
            <BootstrapForm>
                <TwoColumn fields={fields} outputFieldHandler={this.outputField} />

                <Row>
                    <Col lg={1} lgOffset={4}>
                        <Button onClick={this.buttonClickHandler}>Save</Button>
                    </Col>
                </Row>
            </BootstrapForm>
        )
    }
}

export default UserForm
