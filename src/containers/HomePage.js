import React, {Component} from 'react'
import styled from 'styled-components';
//import Login from '../components/Login'
import Home from '../components/Home'
import {Link} from 'react-router-dom'
import { NavigationBar } from '../components/NavigationBar';
import logo2 from '../images/logo2.png'
import {Jumbotron as Jumbo, Container, Row,Col,Image,Button} from 'react-bootstrap'
const GridWrapper = styled.div`
.Jumbo{
background-image: url('../images/firsthomeimage.jpg')
// background-size: cover;
  display: grid;
  grid-gap: 10px;
  margin-top: 1em;
  margin-left: 1em;
  margin-right: 1em;
  grid-template-columns: repeat(12, 1fr);
  grid-auto-rows: minmax(25px, auto);
  opacity: .8
}
  .services{
    background-color:white;
    // opacity: 1

  }
`;
 export default class HomePage extends Component{
render(){
  return( 
  <React.Fragment>

  <NavigationBar />
    <Container>
      
        <GridWrapper>
      <Jumbo className="Jumbo">
          <Image src={logo2} circle className="logo"/>
        <h3>Drywall specialist providing commercial and residetial excellence in craftsmanship since 2008</h3>
      </Jumbo>
      <Row className="show-grid text-center">
        <Col xs={12} sm={4} className="pwerson-wrapper">
        <div className="services">
          <h1>Framing</h1>
          
          <p>Carpentry is a skilled trade and a craft in which the primary work performed is the cutting, shaping and installation of building materials during the construction of buildings, ships, timber bridges, concrete formwork, etc. Carpenters traditionally worked with natural wood and did the rougher work such as framing, but today many other materials are also used[1] and sometimes the finer trades of cabinetmaking and furniture building are considered carpentry. In the United States, 98.5% of carpenters are male, and it was the fourth most male-dominated occupation in the country in 1999. In 2006 in the United States, there were about 1.5 million carpentry positions. Carpenters are usually the first tradesmen on a job and the last to leave.[2] Carpenters normally framed post-and-beam buildings until the end of the 19th century; now this old fashioned carpentry is called timber framing. Carpenters learn this trade by being employed through an apprenticeship training—normally 4 years—and qualify by successfully completing that country's work experience other than a formal training program, which may be the case in many places.</p>
        </div>
        </Col>
        <Col xs={12} sm={4} className="pwerson-wrapper">
        <div className="services">
          <h1>Drywall</h1>
          
          <p> in the United States, there were about 1.5 million carpentry positions. Carpenters are usually the first tradesmen on a job and the last to leave.[2] Carpenters normally framed post-and-beam buildings until the end of the 19th century; now this old fashioned carpentry is called timber framing. Carpenters learn this trade by being employed through an apprenticeship training—normally 4 years—and qualify by successfully completing that country's work experience other than a formal training program, which may be the case in many placesreeeeeretteer</p>
        </div>
        </Col>
        <Col xs={12} sm={4} className="pwerson-wrapper">
        <div className="services">
          <h1>Painting</h1>
          
          <p>reeeeer in the United States, there were about 1.5 million carpentry positions. Carpenters are usually the first tradesmen on a job and the last to leave.[2] Carpenters normally framed post-and-beam buildings until the end of the 19th century; now this old fashioned carpentry is called timber framing. Carpenters learn this trade by being employed through an apprenticeship training—normally 4 years—and qualify by successfully completing that country's work experience other than a formal training program, which may be the case in many placesetteer</p>
        </div>
        </Col>
      </Row>
      </GridWrapper>
    </Container>
  </React.Fragment>
  )
}
 } 
