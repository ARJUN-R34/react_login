import React, { Component } from 'react';
import './App.css';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { FacebookLoginButton } from 'react-social-login-buttons';
import Login from './components/Login/index';


class App extends Component {
  render() {
    return (
      <div className="body">
        <Login />
      </div>    
    );
  }
}

export default App;
