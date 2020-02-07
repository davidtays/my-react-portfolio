import React from 'react';

import Landing from './landingpage';
import About from './aboutme';
import Contact from './contact';
import Projects from './projects';
import Resume from './resume';

import {Switch, Route} from 'react-router-dom';

const Main = () => (
    <Switch>
        <Route exact path={process.env.PUBLIC_URL + '/'} component={Landing} />
        <Route exact path={'/components/aboutme'} component={About} />
        <Route exact path={'/components/contact'} component={Contact} />
        <Route exact path={'/components/projects'} component={Projects} />
        <Route exact path={'/components/resume'} component={Resume} />
    </Switch>
)
export default Main;