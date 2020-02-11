import React, {Component} from 'react';
import {Card, CardTitle, CardText} from 'react-mdl';

class Personal extends Component{
    render(){
        return(
            <div className="about-me">
            
            <Card shadow={0} style={{width: '100%'}}>
                <CardTitle expand>
                    <h2>{this.props.topic}</h2>
                </CardTitle>
                <CardText>
                    <p>{this.props.details}</p>
                </CardText>
            </Card>
            </div>
        )
    }
}

export default Personal;


