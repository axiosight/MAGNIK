import React, { Component } from 'react';
import { Card, Form, Button } from 'react-bootstrap';
import { NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Container } from 'reactstrap';

export class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "", emailIsValid: false,
            password: "", passwordIsValid: false,
            rememberMe: false,
            modalError: false,
            modalSignIn: false,
            errors: []
        };

        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.modalError = this.modalError.bind(this);
        this.modalSignIn = this.modalSignIn.bind(this);
    }

    modalError() {
        this.setState({
            modalError: !this.state.modalError
        });
    }

    modalSignIn() {
        this.setState({
            modalSignIn: !this.state.modalSignIn
        });
    }

    validateEmail(email) {
        var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    onChangeEmail(e) {
        let val = e.target.value;
        let valid = this.validateEmail(val);
        this.setState({ email: val, emailIsValid: valid });
    }

    validatePassword(password) {
        return password.length > 0;
    }

    onChangePassword(e) {
        let val = e.target.value;
        let valid = this.validatePassword(val);

        this.setState({ password: val, passwordIsValid: valid });
    }

    onRememberMe(e) {
        this.setState({ rememberMe: false });
    }

    async handleSubmit(e) {
        e.preventDefault();

        if (this.state.emailIsValid === true && this.state.passwordIsValid === true) {
            let form = new FormData();
            form.append('email', this.state.email);
            form.append('password', this.state.password);
            form.append('rememberMe', this.state.rememberMe);
            form.append('returnUrl', "");

            let url = "";
            let method = 'POST';

            let response = await fetch(url, {
                method: method,
                mode: 'cors',
                body: form
            });

            let responseJson = "";

            if (response.ok) {
                window.location.replace("/Profile");
            } else {
                responseJson = response.json();
                responseJson.then(results => {
                    this.setState({ errors: results.errors });

                    if (this.state.errors.length > 0) {
                        this.setState({ modalSignIn: !this.state.modalSignIn });
                    }
                });

            }
        }
        else {
            this.setState({
                modalError: !this.state.modalError
            });
        }
    }

    renderForm() {
        let emailColor;
        let passwordColor;

        if(this.state.email === "" && this.state.password === ""){
            emailColor = "";
            passwordColor = "";
        }
        else{
            emailColor = this.state.emailIsValid === true ? "is-valid" : "is-invalid";
            passwordColor = this.state.passwordIsValid === true ? "is-valid" : "is-invalid";
        }

        return (
            <Card className="text-center border p-5 col-md-6 rounded " style={{ backgroundColor: '#faf7f7', boxShadow: '5px 5px 10px #cccccc', margin: '0 auto', width: '100%' }}>
                <Form>
                    <Form.Text className="m-4" style={{ fontSize: '20pt' }}><strong>Sign In</strong></Form.Text>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Control onChange={this.onChangeEmail} className={'mb-2 col-md-10 ' + emailColor} type="email" placeholder="Enter email" style={{ float: 'none', margin: '0 auto' }} />
                        <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Control onChange={this.onChangePassword} className={'mb-2 col-md-10 ' + passwordColor} type="password" placeholder="Password" style={{ float: 'none', margin: '0 auto' }} />
                    </Form.Group>
                    <Button className="mb-2 col-md-4" style={{ boxShadow: '5px 5px 10px #cccccc' }} variant="primary" type="submit">Submit</Button>
                    <NavLink tag={Link} className="text-info" to="/forgotpassword">Forgot password?</NavLink>
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