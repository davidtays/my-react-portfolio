import React, {Component} from 'react';
import Personal from './personal';
class About extends Component{
    render(){
        return(
            <div className="contact-body">
                <Personal 
                    topic={"ORIGIN"}
                    details={"My name is david tays and i am from the planet earth"}
                />
                <Personal 
                    topic={"LIKES"}
                    details={"I love to code and collaborate!  My favorite television show is duck dynasty.  My favorite color is Blue, though I am a Husker fan and love Big Red!"}
                />
                <Personal
                    topic={"GOALS"}
                    details={"In the near future, my goals are to increase "}
                />
            </div>
        )
    }
    
}
export default About;