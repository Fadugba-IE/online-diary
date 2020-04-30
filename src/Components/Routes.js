import React, {Component} from 'react'
import { Router, Switch, Route } from 'react-router-dom';


import LandingPage from '../Pages/LandingPage';
import LoginPage from '../Pages/LoginPage';
import SignUpPage from '../Pages/SignUpPage';
import history from './history';



class Routes extends Component {
    render(){
        return(
          <Router history= {history}>
            <Switch>
            <Route exact path="/" component = {LandingPage} />
            <Route exact path="/Home" component = {LandingPage} />
            <Route exact path="/login" component = {LoginPage} />
            <Route exact path="/signup"  component = {SignUpPage} />
        </Switch>
        </Router>
        );
    }
      

}


export default Routes;