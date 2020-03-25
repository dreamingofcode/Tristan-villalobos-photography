import React from 'react'
import {Jumbotron as Jumbo, Container} from 'react-bootstrap';
import styled from 'styled-components'
// import paint from '../paint.jpeg'
import paint1 from '../images/paint1.jpeg'
import UserType from './UserType'

const Styles = styled.div`
.jumbo{
    background: url(${paint1}) no-repeat fixed bottom;
    background-size: cover;
    color: #CCC;
    height: 400px;
    position: relative;
    z-index: -2;
}
.overlay{
    background: url(${paint1}) no-repeat fixed bottom;
    background-size: cover;
background-color: #000;
    opacity: 1;
    position: absolute;
    top:0;
    left:0;
    bottom:0;
    right:0;
    z-index: -1;
}`
 const Home=()=>{
return (
    <Styles>
        {/* <Jumbo fluid className="jumbo"> */}
           
            <div className="overlay"> </div>
        {/* <Container> */}
            <h2>WELCOME!</h2>
            <UserType/>
  
        {/* </Container> */}
        {/* </Jumbo> */}
    </Styles>
    )
}
export default Home