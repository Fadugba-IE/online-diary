import React  from 'react';
import {Navbar} from 'react-bootstrap';
import '../App.css';


 function NavbarLogin() {
    return (
      <div >
<Navbar bg="dark" variant="dark">
    <Navbar.Brand href="/">
      Online Diary APP 
    </Navbar.Brand>
  </Navbar>
</div>
  )  
}

export default NavbarLogin;




 
     /* 
     import history from '../Components/history';
     <Button className= 'header-login' variant="primary" onClick = {() => history.push('/signup')}>Sign Up</Button> 
     
     <Layout fixedHeader>
          <Header className= 'header-style' title= {<span><strong>My Online Diary App</strong></span>}>

          
          </Header>

          <Drawer className='drawer-style'>
            <Navigation>

            </Navigation>
             
            </Drawer>
         
          <Content />
      </Layout>
      */