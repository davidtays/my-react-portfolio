import React from 'react';

import Landing from './landingpage';
import About from './aboutme';
import Contact from './contact';
import Projects from './projects';
import Resume from './resume';

import {BrowserRouter, Switch, Route} from 'react-router-dom';

const Main = () => (
    <BrowserRouter
        basename="process.env.PUBLIC_URL + "
    >
    <Switch>
        <Route exact path={'/'} component={Landing} />
        <Route exact path={process.env.PUBLIC_URL + '/components/aboutme'} component={About} />
        <Route exact path={process.env.PUBLIC_URL + '/components/contact'} component={Contact} />
        <Route exact path={process.env.PUBLIC_URL + '/components/projects'} component={Projects} />
        <Route exact path={process.env.PUBLIC_URL + '/components/resume'} component={Resume} />
    </Switch>
    </BrowserRouter>
    
)
export default Main;