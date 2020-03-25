import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { NavigationBar } from '../components/NavigationBar';

export default class Login extends Component {
  render() {
    return (
      <div className="login_container">
        <NavigationBar/>
        <div className="login_header">
          <h1>Administrative Login</h1>
          <p>click <Link to="/admin-create">here </Link>to create a new admin account</p>
        </div>
        <form className="login_form">
            <label></label>
          <input
            type="text"
            name="admin_username"
            placeholder="Enter Username"
          /> 
          <label></label>
          <input
            type="text"
            name="admin_username"
            placeholder="Enter Password"
          />
          <input type="submit"value="Login" />
        </form>
      </div>
    );
  }
}
