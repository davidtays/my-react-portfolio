import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';
class Resume extends Component{
    render(){
        return(
            <div>
                <Grid>
                    <Cell col={4}>
                        <div style={{textAlign: 'center'}}>
                            <img
                                src={require('../assets/david.png')}
                                alt="avatar"
                                style={{height: '200px'}}
                            />
                        </div>
                        <h2 style={{paddingTop: '2em'}}> David Tays</h2>
                        <h4 style={{color: 'grey'}}>Programmer</h4>
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}} />
                        <p>Dang it feels good to be a hackster! Have a look at my credentials!</p>
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}} />
                        <h5>Address</h5>
                        <p>1 Hacker Way Menlo Park, 94025</p>
                        <h5>Phone</h5>
                        <p>(402) 670-5783</p>
                        <h5>Email</h5>
                        <p>davidtays22@gmail.com</p>
                        <h5>Web Portfolio 1</h5>
                        <p>https://davidtays.github.io/</p>
                        <h5>Web Portfolio 2</h5>
                        <p>https://davidtays.github.io/WebPortfolio/</p>
                        <h5>Web Quiz</h5>
                        <p>https://davidtays.github.io/GroupB</p>
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}} />
                    </Cell>
                    <Cell className="resume-right-col" col={8}>
                        <h2>Education</h2>
                        <Education 
                          startYear={2014}
                          endYear={2017}
                          schoolName={'SCC'}
                          schoolDescription={'Community College'}
                          />
                          <Education 
                          startYear={2017}
                          endYear={2019}
                          schoolName={'Bellevue University'}
                          schoolDescription={'University in Bellevue Nebraska'}
                          />
                          <hr style={{borderTop: '3px solid #e22947'}} />
                        <h2>Experience</h2>
                        <Experience
                            startYear={2018}
                            endYear="current"
                            jobName="American Amusements"
                            jobDescription="Software developer"
                        />
                        <Experience
                            startYear={2013}
                            endYear={2017}
                            jobName="Mr. Mow"
                            jobDescription="A lawn service that I created to get my wife and I through college"
                        />
                          <hr style={{borderTop: '3px solid #e22947'}} />
                        <h2>Skills</h2>
                        <Skills
                            skill='javascript'
                            progress='100'
                        />
                        <Skills
                            skill='HTML/CSS'
                            progress='100'
                        />
                        <Skills
                            skill='NodeJS'
                            progress='75'
                        />
                        <Skills
                            skill='React'
                            progress='75'
                        />

                    </Cell>

                </Grid>
            </div>
        )
    }
}

export default Resume;