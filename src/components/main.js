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
        <Route path="my-react-portfolio/aboutme" component={About} />
        <Route path="my-react-portfolio/contact" component={Contact} />
        <Route path="my-react-portfolio/projects" component={Projects} />
        <Route path="my-react-portfolio/resume" component={Resume} />
    </Switch>
)
export default Main;