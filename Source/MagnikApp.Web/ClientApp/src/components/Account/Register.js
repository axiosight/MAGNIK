import React, { Component } from 'react';
import { Card, Form, Button } from 'react-bootstrap';
import { Container } from 'reactstrap';

export class Register extends Component {

    renderForm() {
        return (
            <Card className="text-center border p-5 col-md-6 rounded" style={{ backgroundColor: '#faf7f7', boxShadow: '5px 5px 10px #cccccc', margin: '0 auto', width: '100%' }}>
                <Form>
                <Form.Text className="m-4" style={{ fontSize: '20pt' }}><strong>Sign Up</strong></Form.Text>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Control className="mb-2 col-md-10" type="email" placeholder="Enter email" style={{ float: 'none', margin: '0 auto' }}/>
                        <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
                    </Form.Group>
                    <Form.Group controlId="formBasicName">
                        <Form.Control className="mb-2 col-md-10" type="text" placeholder="Enter your name" style={{ float: 'none', margin: '0 auto' }}/>
                    </Form.Group>
                    <Form.Group controlId="formBasicSurname">
                        <Form.Control className="mb-2 col-md-10" type="text" placeholder="Enter your surname" style={{ float: 'none', margin: '0 auto' }}/>
                    </Form.Group>
                    <Form.Group controlId="formBasicPhone">
                        <Form.Control className="mb-2 col-md-10" type="tel" placeholder="Enter your phone" style={{ float: 'none', margin: '0 auto' }}/>
                        <Form.Text className="text-muted">Format for tel 375(XX)XXX-XX-XX</Form.Text>
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Control className="mb-2 col-md-10" type="password" placeholder="Password" style={{ float: 'none', margin: '0 auto' }}/>
                    </Form.Group>
                    <Form.Group controlId="formBasicConfirmPassword">
                        <Form.Control className="mb-2 col-md-10" type="password" placeholder="Confirm Password" style={{ float: 'none', margin: '0 auto' }}/>
                    </Form.Group>
                    <Button className="mb-2 col-md-4" style={{ boxShadow: '5px 5px 10px #cccccc' }} variant="primary" type="submit">Submit</Button>
                </Form>
            </Card>
        );
    }


    render() {
        return (
            <Container>
                {this.renderForm()}
            </Container>
        );
    }
}