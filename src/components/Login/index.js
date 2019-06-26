import React, { Component } from 'react';
import './Login.css';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { FacebookLoginButton, GoogleLoginButton } from 'react-social-login-buttons';

export default class Login extends Component {
    render() {
        return (
          <div className="body">
            <div className="login-form">
              <Form className="container">
                <h1 className = "text-center">
                  WELCOME
                </h1>
                <FormGroup>
                  <Input type="email" placeholder="Email" className="input" />
                </FormGroup>
                <FormGroup>
                  <Input type="password" placeholder="Password" />
                </FormGroup>
                <Button className="btn-lg btn-dark btn-block">
                  Let Me In
                </Button>
                <div className="text-center pt-3">
                  Or log in with your social accounts
                </div>
                <FacebookLoginButton className="mt-3 mb-3" />
                <GoogleLoginButton className="mt-3 mb-3" />
                <div className="text-center">
                  <a href="/sign-up"> Sign Up </a>
                  <span className="p-2"> | </span>
                  <a href="/forgot-password"> Forgot Password </a>
                </div>
              </Form>
            </div>
          </div>
        )
    }
}
