import React, { Component } from 'react';
import '../App.css';



const initialState = {
                username : "",
                email : '',
                password :  '',
                confirmpassword: '',
                usernameError: '',
                emailError: '',
                passwordError: '',
                confirmpasswordError: ''
                
                

};




 class SignUpForm extends Component {
        constructor(props){
            super(props);

            this.state = initialState;
                

            

            this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        };

        
        

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
                alert('Registration Successful');
                this.setState (initialState);
                
          }

       
            
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


                
                <input type = "submit" value = "Sign Up" />

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