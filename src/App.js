import React from 'react';
import {Switch, Route} from 'react-router-dom';



import LandingPage from './Pages/LandingPage';
import LoginPage from './Pages/LoginPage';
import SignUpPage from './Pages/SignUpPage';
import dashboard from './Pages/dashboard';

//import history from './Components/history';

//import Routes from './Components/Routes';







function App () {
    const user = null;
        return( 
            user ? 
            <Route path = "/dashboard" component = {dashboard} />
            :


             <Switch>
             <Route exact path="/"  component = {LandingPage} />
             <Route   path= "/login" component = {LoginPage}  />
             <Route   path="/signup"  component = {SignUpPage} />
             </Switch>
            
        );
    }
      


export default App;
