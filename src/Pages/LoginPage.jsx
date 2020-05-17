import React from 'react';
import NavbarLogin from '../Components/NavbarLogin';
import { Container, Row, Col } from 'react-bootstrap';
import '../App.css';
import LoginForm from '../Components/LoginForm';

function LoginPage() {
    return (
        <div className = 'form-page' >
                <NavbarLogin />

                <Container fluid>
                    <Row>
                        
                        <Col>

                  <div>
                <LoginForm />
                <p> Do not have an account? <a>Sign Up</a></p>
                  </div>



                        
                
                </Col>
                    </Row>
                </Container>
            
        </div>
    )
}

export default LoginPage
