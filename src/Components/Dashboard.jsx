import React, { Component } from 'react';
import {Layout,Header,Navigation,Drawer,Content} from 'react-mdl';
import {Link} from 'react-router-dom';
import '../App.css';
import DashboardForm from './DashboardForm';



export class Dashboard extends Component {
    render() {
        return (
            <div className="demo-big-content"> 
            <Layout className = "dashboard-page"> 
                
            <Header className = 'dashboard-header' title = ' Dashboard'  scroll >
            <Navigation>
            </Navigation>
        </Header>
              
                <Drawer className = 'dashboard-drawer' >
                    <Navigation >
                        <Link to="#">create a memory</Link>
                        <Link to="#">Memories</Link>
                    </Navigation>
                </Drawer>
                <Content>
                  <div className="page-content" />
                  <DashboardForm/>
                </Content>
            </Layout>
           
           </div>
        )
    }
}

export default Dashboard;
