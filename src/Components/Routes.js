import React, {Component} from 'react'
import {Switch, Route, Router} from 'react-router-dom';
import history from './history';



import LandingPage from '../Pages/LandingPage';
import LoginPage from '../Pages/LoginPage';
import SignUpPage from '../Pages/SignUpPage';




class Routes extends Component {
   
    render(){

        return( 
                <Router history = {history}>
            
             <Switch>
             <Route exact path="/"  component = {(LandingPage)} />
             <Route  path="/login" component = {(LoginPage)}  />
             <Route  path="/signup"  component = {(SignUpPage)} />
             </Switch>

             </Router>
            
        );
    }
      

}


export default  Routes;
