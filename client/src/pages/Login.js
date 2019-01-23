import React, { Component } from "react";
import { FormGroup, FormControl, Button } from 'react-bootstrap';
import axios from 'axios';

class Login extends Component {
  state = {
    email: '',
    password: '',
  }

  handleChange = key => (event) => {
    const { target: { value } } = event;
    this.setState({ [key]: value });
  }

  handleSubmit = event => {
    event.preventDefault();
    const { email, password } = this.state;
    axios.post('/api/attemptLogin', { email: email, password: password })
      .then(res => {
        console.log(res);
        console.log(res.data);
        this.props.history.push('/dashboard');
      })
  }

  render() {
    const { email, password } = this.state;
    return(
      <div className="login-page">
        <form onSubmit={this.handleSubmit}>
        <h1>Login</h1>
          <FormGroup>
            <FormControl
            type="email"
            placeholder="Email"
            value={email}
            onChange={this.handleChange('email')}
              />
          </FormGroup>
          <FormGroup>
            <FormControl
            type="password"
            placeholder="Password"
            value={password}
            onChange={this.handleChange('password')}
              />
          </FormGroup>
          <Button className="justo-button" type="submit">Submit</Button>
        </form>
      </div>
    )
  }
}

export default Login;