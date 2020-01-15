import React, { Component } from 'react';
import { Jumbotron, Container } from 'reactstrap';
import { Card, Form, Button } from 'react-bootstrap';

export class ForgotPassword extends Component {
    renderJumbotron() {
        return (
            <Jumbotron className="jumbotron-fluid jumbotron-image">
                <Container>
                    <Card className="col-md-8" style={{ boxShadow: '5px 5px 10px #cccccc', float: 'none', margin: '0 auto' }}>
                        <Card.Title className="text-center">
                            <div className="display-4 mt-4" style={{ fontSize: '26pt' }}>Forgot your password?</div>
                        </Card.Title>
                        <hr />
                        <Card.Body className="text-center">
                            <div className="form-inline" style={{display: 'block'}}>
                                <Form.Control onChange={this.onChangeEmail} className={'ml-2 col-md-6 mb-2'} type="email" placeholder="Enter email" />
                                <Button className="ml-2 col-md-2 mb-2" style={{ boxShadow: '5px 5px 10px #cccccc' }} variant="primary" type="submit">Send</Button>
                            </div>
                        </Card.Body>
                    </Card>
                </Container>
            </Jumbotron>
        );
    }

    render() {
        return (
            <div>
                {this.renderJumbotron()}
            </div>
        );
    }
}