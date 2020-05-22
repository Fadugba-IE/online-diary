import React  from 'react';
import {Navbar, Button} from 'react-bootstrap';
import '../App.css';
import history from './history';

 function NavBar() {
    return (
      <div>
<Navbar bg="dark" variant="dark">
    <Navbar.Brand href=" ">
    <img
        alt=""
        src="/logo.svg"
        width="30"
        height="30"
        className="d-inline-block align-top"
      />{' '}
      Online Diary APP 
      <Button className= 'header-login' variant="primary" onClick = {() => history.push("/login")}>LOG IN</Button> 
    </Navbar.Brand>
  </Navbar>
</div>
  )  
}

export default NavBar;


 
     /* <Layout fixedHeader>
          <Header className= 'header-style' title= {<span><strong>My Online Diary App</strong></span>}>

          
          </Header>

          <Drawer className='drawer-style'>
            <Navigation>

            </Navigation>
             
            </Drawer>
         
          <Content />
      </Layout>
      */