import React, { Component } from 'react';
import '../App.css';
import {Button} from 'react-bootstrap';
import history from './history';
import {auth} from '../firebase/firebaseIndex';



 class LoginForm extends Component {
        constructor(props){
            super(props);

            this.state = {
                email : '',
                password :  ''
            }

            this.handleChange = this.handleChange.bind(this);
        //this.handleSubmit = this.handleSubmit.bind(this);
        this.login = this.login.bind(this);

        };

        
        

        handleChange(event){
            this.setState ({[event.target.name]  : event.target.value });
            
        }

        login (event) {
                event.preventDefault();
            auth.signInWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
                console.log(u)
                 history.push('/dashboard');
            }).catch((err) =>{
                alert ('Incorrecct Credentials. Please try again')
                console.log(err)
            })
           
            
        }


    render() {
        return (
              
                <div className = 'Login-form'>

                <h2>LOG IN</h2>

                <form >  
                     


                

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


                
                <input onClick = {this.login}   type = "submit" value = "Login" />
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




onSubmit = {this.handleSubmit}  */