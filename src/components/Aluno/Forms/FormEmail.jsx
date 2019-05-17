import React from 'react';

import {
    FormGroup,
    Form,
    Input,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
    Row,
    Col,
    Button
} from 'reactstrap';

const divStyle = {
    padding: '20px'
  }

const FormEmail = (props) => {
    const { classes } = props;
    
    return (
        <>
            <Form style={divStyle}>
                <Row>
                    <Col md="10">
                        <FormGroup>
                            <Input
                                id="formProfileInput[Nome]"
                                placeholder="Nome"
                                type="text"
                            />
                        </FormGroup>

                    </Col>
                </Row>
            </Form>
        </>
    );
}


export default FormEmail;