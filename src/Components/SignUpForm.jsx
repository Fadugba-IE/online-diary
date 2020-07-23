import React, { Component } from 'react';
import '../App.css';
import {auth} from '../firebase/firebaseIndex';
import history from './history';




const initialState = {
                username : "",
                email : '',
                password :  '',
                confirmpassword: '',
                usernameError: '',
                emailError: '',
                passwordError: '',
                confirmpasswordError: '',
               
                
                

};




 class SignUpForm extends Component {
        constructor(props){
            super(props);

            this.state = initialState;
                

            

            this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
       // this.createUserWithEmailAndPasswordHandler = this.createUserWithEmailAndPasswordHandler.bind(this);
      // this.signup = this.signup.bind(this);

        };

    
        
      /*  signup(event){
            event.preventDefault();    
        } */
        

        handleChange(event){
            this.setState ({[event.target.name]  : event.target.value });
            
        }

        validate = () =>{

           let usernameError =  '';
           let emailError = '';
           let passwordError = '';
            let confirmpasswordError = '';


            // username validation
            
            if(!this.state.username){
                usernameError= "name cannot be blank";
            }
            

            // email validation

            if ( !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(this.state.email)){
                emailError = "Please enter a valid email address";
            }

            // password validation 

            if( !/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/.test(this.state.password)){
                passwordError = "password should contain at least one Uppercase, lowercase letter and one special character"
            }

             // confirmpassword validation

             if (this.state.password !== this.state.confirmpassword){
                 confirmpasswordError = "password does not match"
             }
            
               // General validation
            if (emailError || usernameError || passwordError || confirmpasswordError){
                this.setState({ emailError, usernameError, passwordError, confirmpasswordError})
                return false;
            }
            return true;

  

        };




        handleSubmit(event) {
            
            event.preventDefault();
            const isValid = this.validate();
            if(isValid){
                console.log(this.state);       
          }    
          
          auth.createUserWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
            console.log(u)
            alert('Registration Successful');
            this.setState = initialState;
            history.push('/login')
        }).catch((err) =>{
            console.log(err)
        })
            };

          
            

    render() {
        return (
              
                <div className = 'SignUp-form'>

                <h2>SIGN UP</h2>

                <form  onSubmit = {this.handleSubmit} noValidate>


                    <label>Username</label>
                <input onChange = {this.handleChange}
               
               name = "username"
               
                value = {this.state.username} />
                <div className = "Error-message">{this.state.usernameError}</div> 

                
                    <label>Email Address</label>
                <input onChange = {this.handleChange}
               
                name = "email"
                 value = {this.state.email} />
                 <div className = "Error-message">{this.state.emailError}</div> 
            
               
                
               
                    <label>Password</label>

                <input onChange= {this.handleChange}
                
                name = "password"
                 type = "password"
                  value = {this.state.password} />
                <div className = "Error-message">{this.state.passwordError}</div> 


                  <label>Confirm Password</label>

                <input onChange = {this.handleChange}
               
               name = "confirmpassword"
                type = "password" 
                value = {this.state.confirmpassword} />
                <div className = "Error-message">{this.state.confirmpasswordError}</div> 


                
                <input onClick = {this.signup} type = "submit" value = "Sign Up" />

                </form>

               
              
                </div>


              
         
        )
    }
}

export default SignUpForm;


/*
error: null,

 try {
              const { user } = await auth.createUserWithEmailAndPassword(event, this.state.email, this.state.password);
                
          }

          catch(error){
              console.error(error);
          }
*/


/*createUserWithEmailAndPasswordHandler = async (event, email, password) =>{
    event.preventDefault();
    try{
        const {user} = await auth.createUserWithEmailAndPassword(this.state.email, this.state.password);
        generateUserDocument (user, {email}, {password});
        
    }
        catch(error){
            console.error('Error Signing up with email and password')
    }
    this.setState = initialState;
}; */