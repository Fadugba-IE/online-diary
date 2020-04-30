import React from 'react';
import {Button} from 'react-bootstrap';
import '../App.css';
import history from './history';




 function Buttons() {
        return (
               
            <div className="Landing-buttons">
            <Button className='button' variant= "Primary" size="lg" onClick = {() => history.push('/login')}>LOG IN</Button> 
            <Button className='button' variant="Primary" size="lg" onClick = {() => history.push('/signup')}>SIGN UP</Button>
            </div>
        )
    }


export default (Buttons);
