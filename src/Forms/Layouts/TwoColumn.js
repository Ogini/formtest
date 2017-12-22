import React from 'react'
import {Row, Col} from 'react-bootstrap'
import Empty from '../hoc/Empty'

class TwoColumn extends React.Component {
    render() {
        let idx = 0
        const content = []
        const {fields, outputFieldHandler} = this.props
        const fieldArray = fields.map(p => outputFieldHandler(p))
        while (fieldArray.length) {
            const col1 = fieldArray.shift()
            const col2 = fieldArray.length ? fieldArray.shift() : null
            content.push(
                <Row key={idx}>
                    <Col lg={4} lgOffset={2}>
                        {col1}
                    </Col>
                    {col2
                        ? <Col lg={4} lgOffset={1}>
                            {col2}
                          </Col>
                        : null
                    }
                </Row>
            )
            idx++
        }

        return (
            <Empty>
                {content}
            </Empty>
        )
    }
}

export default TwoColumn
