import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';



import LandingPage from './Pages/LandingPage';
import LoginPage from './Pages/LoginPage';
import SignUpPage from './Pages/SignUpPage';
import Dashboard from './Components/Dashboard';

import { auth } from './firebase/firebaseIndex';
//import {UserContext} from './providers/UserProvider'

//import history from './Components/history';

//import Routes from './Components/Routes';







class App extends Component {
    constructor (props){
        super(props);
        this.state = {
            user : {}
        }
    }
    componenDidMount(){
        this.authListener();
    }
    authListener(){
        auth.onAuthStateChanged((user)=>{
            if(user){
                this.setState({user})
            }
            else{
                this.setState ({user : null})
            }
        })
    }

    render (){
    return(
        this.state.user ?

       
       
      
       <Switch>
          <Route path = "/dashboard" component = {Dashboard} />
       <Route exact path="/"  component = {LandingPage} />
       <Route   path= "/login" component = {LoginPage}  />
       <Route   path="/signup"  component = {SignUpPage} />
       </Switch>

        :
       
             <Switch>
             <Route exact path="/"  component = {LandingPage} />
             <Route   path= "/login" component = {LoginPage}  />
             <Route   path="/signup"  component = {SignUpPage} />
             </Switch>
              
       

    );
    }
       
    }
      


export default App;


/*  const user = null;
         
            user ? */

            // const user = useContext(UserContext);