import React, {Component} from 'react';
import Personal from './personal';
import {ListItem, List} from 'react-mdl';
class About extends Component{
    render(){
        return(
            <div className="about-me">>
                <List>
                    <ListItem>
                        <Personal 
                            topic={"ORIGIN"}
                            details={"My name is david tays and i am from the planet earth"}
                        />
                    </ListItem>
                    <ListItem>
                        <Personal 
                            topic={"LIKES"}
                            details={"I love to code and collaborate!  My favorite television show is duck dynasty.  My favorite color is Blue, though I am a Husker fan and love Big Red!"}
                        />
                    
                    </ListItem>
                    <ListItem>
                        <Personal
                            topic={"GOALS"}
                            details={"In the near future, my goals are to increase my internet presence.  My intentions are to be available to employers and enthusiasts through mediums from GitHub to Youtube!"}
                        />
                    </ListItem>
                </List>
            </div>
        )
    }
    
}
export default About;