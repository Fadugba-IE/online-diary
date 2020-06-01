import React, { Component } from 'react';
import '../App.css';
import {Button} from 'react-bootstrap';
import history from './history';



 class LoginForm extends Component {
        constructor(props){
            super(props);

            this.state = {
                email : '',
                password :  ''
            }

            this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        };

        
        

        handleChange(event){
            this.setState ({[event.target.name]  : event.target.value });
            
        }

        handleSubmit (event) {
            alert('you have logged in successfully' + this.state.username);
            
        }


    render() {
        return (
              
                <div className = 'Login-form'>

                <h2>LOG IN</h2>

                <form  onSubmit = {this.handleSubmit}>


                

                <input onChange = {this.handleChange}
               
                name = "email"
                 type = "email" 
                 placeholder = "Email"
                 value = {this.state.email} required />

                
               


                <input onChange= {this.handleChange}
                
                name = "password"
                 type = "password"
                 placeholder = "Password"
                  value = {this.state.password} required />


                
                <input type = "submit" value = "Login" />
                </form>

                <p> Do not have an account? <Button className='button-form' variant="Primary" size="lg" onClick = {() => history.push('/signup')}>SIGN UP</Button> </p>
                </div>


              
         
        )
    }
}

export default LoginForm;



/* 

import {auth} from '../firebase/firebaseIndex';
,
                error: null

                try {
                const { user } = await auth.signInWithEmailAndPassword(event, this.state.email, this.state.password);
            }
  
            catch(error){
                console.error(error);
            }


*/