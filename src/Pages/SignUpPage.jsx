import React from 'react';
import NavbarLogin from '../Components/NavbarLogin';
import { Container, Row, Col } from 'react-bootstrap';
import '../App.css';
import SignUpForm from '../Components/SignUpForm';

function SignUpPage() {
    return (
        <div className = 'form-page' >
                <NavbarLogin />

                <Container fluid>
                    <Row>
                        
                        <Col>

                  <div>
                <SignUpForm />
                
                  </div>



                        
                
                </Col>
                    </Row>
                </Container>
            
        </div>
    )
}

export default SignUpPage;

