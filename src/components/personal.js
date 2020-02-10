import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';

class Personal extends Component{
    render(){
        return(
            <Grid className="contact-grid">
                <Cell col={4}>
                    <h4>{this.props.topic}</h4>
                </Cell>
                <Cell className="resume-right-col" col={8}>
                    <p style={{width: '75%', margin: 'auto'}}>{this.props.details}</p>
                </Cell>
                <hr style={{borderTop: '3px solid #833fb2', width: '100%'}} />
            </Grid>
            
        )
    }
}

export default Personal;


