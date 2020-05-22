import React, {Component} from 'react';
import NavbarLogin from '../Components/NavbarLogin';
import { Container, Row, Col } from 'react-bootstrap';
import '../App.css';
import LoginForm from '../Components/LoginForm';
import {withRouter} from 'react-router-dom';

class LoginPage extends Component {
    render(){

    return (
        <div className = 'form-page' >
                <NavbarLogin />

                <Container fluid>
                    <Row>
                        
                        <Col>

                  <div>
                <LoginForm />
                
                  </div>



                        
                
                </Col>
                    </Row>
                </Container>
            
        </div>
    )

    }
}

export default withRouter (LoginPage);
