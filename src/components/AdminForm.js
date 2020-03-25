import React, { Component } from 'react';
import styled from 'styled-components'


const Styles = styled.div`
.adminForm_header{
    background-color:white;
}`

export default class AdminForm extends Component {
  render() {
    return (
      <Styles>
        <div className="adminForm_header">
          <h1>Welcome Boss!</h1>
          <p>To Proceed, please provide the required security token below</p>
        </div>
        <form className="AdminForm_form">
          <input
            type="text"
            name="security_key"
            placeholder="Enter Security Key"
          />
          <input type="submit" />
        </form>
      </Styles>
    );
  }
}
