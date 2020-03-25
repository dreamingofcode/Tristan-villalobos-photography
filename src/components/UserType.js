import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'
import logo2 from '../images/logo2.png'
// import logo3 from '../images/logo3.png'
// import logo1 from '../images/logo1.png'
// import logo4 from '../images/logo4.png'
// import logo5 from '../images/logo5.png'

const Styles = styled.div`
  .client ,.guest,.admin{
    background-color: white;
     display: inline-block;
    //  position: absolute;
    // padding-right:50%;
  margin: 10px;
  }
  .user_types {
    position: absolute;
    text-align: center;
    top: 80%;
    left: 38%;
  }
  .logo{
      height: 370px;
       background-color: white
       ;
      opacity: 5
      background-size: ;
      text-align: center
     margin-bottom:50px;
  }
 
`;
const UserType = () => {
  return (
    <Styles>
               <img className="logo" src={logo2} />
      <h1 >Please select a User Type Below:</h1>
      <div className="user_types">
        <div className="guest">
          <Link to="/home" className="guest">GUEST</Link>
          {/* // onClick={console.log("guest") */}
        </div>
        <div className="client">
        <Link to="/login" className="client">CLIENT</Link>
        </div>
        <div className="admin">
        <Link to="/admin" className="admin">ADMIN</Link>
        </div>
      </div>
    </Styles>
  );
};
export default UserType;
