import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import NavBar from '../Components/NavBar';
import '../App.css';
import Buttons from '../Components/Buttons';
import {withRouter} from 'react-router-dom';






class LandingPage extends Component {
    render() {
        return (
            <div className='Landing-page'>
                <NavBar/>
                <Container fluid>
                    <Row>
                        <Col>
                      <div className = 'banner-text'>
                          <h1> The Online Diary App</h1>
                     <p> Preserve your memories for the future Using the Online Diary App. </p>
                      </div>

         <div>
             <Buttons />
            </div>
                        </Col>
                    </Row>
                </Container>

                
            </div>
        )
    }
}

export default withRouter(LandingPage);


//  <Buttons />