import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main';
import {Link} from 'react-router-dom';

/* USES FONT-AWESOME ICONS*/

class App extends Component {
  render(){
    return (
      /* Uses a header that scrolls with the text, rather than staying locked at the top */
        <div className="demo-big-content">
            <Layout>
                <Header className="header-color" title={<Link style={{textDecoration: 'none', color: 'darkgrey'}} to="/">David Tays</Link>} scroll>
                    <Navigation>                        
                        <Link style={{textDecoration: 'none', color: 'darkgrey'}}to="/aboutme">About</Link>
                        <Link style={{textDecoration: 'none', color: 'darkgrey'}} to="/contact">Contact</Link>
                        <Link style={{textDecoration: 'none', color: 'darkgrey'}} to="/resume">Resume</Link>
                        <Link style={{textDecoration: 'none', color: 'darkgrey'}} to="/projects">Projects</Link>
                    </Navigation>
                </Header>
                <Drawer className="header-color" title={<Link style={{textDecoration: 'none', color: 'darkgrey'}} to="/">David Tays</Link>}>
                    <Navigation>                        
                        <Link to="/aboutme">About</Link>
                        <Link to="/contact">Contact</Link>
                        <Link to="/resume">Resume</Link>
                        <Link to="/projects">Projects</Link>
                    </Navigation>
                </Drawer>
                <Content>
                    <div className="page-content" />
                    <Main />
                </Content>
            </Layout>
        </div>
    );
  }  
}

export default App;
