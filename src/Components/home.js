import React from 'react';
import { Menu } from 'semantic-ui-react';
import { Link, BrowserRouter as Router, Route } from 'react-router-dom';
import './style.css';
import { Button, Card, Grid, Image, Container } from 'semantic-ui-react'

class Home extends React.Component {
    render() {
        return (
            <div>
                <Menu secondary>
                    <Menu.Item>
                        <img className="ui image img-height" src="./assets/logo.png" />
                    </Menu.Item>
                    <Menu.Item className="custom-style">
                        <Router>
                            <Link to="/requestdemo">Request A Demo</Link>
                        </Router>
                    </Menu.Item>
                    <Menu.Item position='right'>
                        <button className="custom-button" type="submit">Login</button>
                    </Menu.Item>
                </Menu>
                <div>
                    <div className="custom-image" style={{
                        backgroundImage: `url(${process.env.PUBLIC_URL
                            + "/assets/heromain.jpg"})`
                    }}>
                        <div className="heromain">
                            <h2 className="custom-heromain-text">SIMPLIFYING SAFETY</h2>
                            <p className="heromain-text">MSM eCOR’s complete cloud based OHS software will allow you to
                                improve your Organization’s compliance & accountability.  Simplify your Health &
                                Safety Management System by using our custom Risk Assessment Tool that you can
                                monitor in real-time.</p>
                            <p><Button color='red'>Request a DEMO</Button>
                                <Button color='teal'>LEARN MORE</Button></p>
                        </div>
                    </div>

                </div>
                <div className="custom-card">
                    <Card.Group itemsPerRow={3}>
                        <Card>
                            <Card.Content textAlign="center">
                                <img className="ui image img-height" src="./assets/msmecor.png" />
                                <Card.Header>OH&S Prequalification Programs</Card.Header>
                                <Card.Description>
                                    <p>COR® is an OHS prequalification requirement for many municipal &
                                        provincial government construction projects and without the proper HSMS
                                        getting COR® can be very time consuming and complicated.
                                        MSM eCOR is here to help.  Contact us today to get on the right Path
                                        to COR®.</p>
                                </Card.Description>
                            </Card.Content>
                        </Card>
                        <Card>
                            <Card.Content textAlign="center">
                                <img className="ui image img-height" src="./assets/msmecorgreen.png" />
                                <Card.Header>Manage Subcontractors</Card.Header>
                                <Card.Description>
                                    <p>Our Global Projects feature will improve the working
                                        relationships with your subcontractors by streamlining the OHS
                                        onboarding, daily, weekly and monthly legislative compliance
                                        requirements and prepare you for the new COR® 2020 (Ontario).</p>
                                </Card.Description>
                            </Card.Content>
                        </Card>
                        <Card>
                            <Card.Content textAlign="center">
                                <img className="ui image img-height" src="./assets/msmecororange.png" />
                                <Card.Header>Stop Chasing Documentation</Card.Header>
                                <Card.Description>
                                    <p> OHS software was designed by safety with the sole purpose to
                                        manage your data which allows you the time to focus on what is
                                        important within your HSMS.  Our cost savings solution will support
                                        any complexity within your HSMS.</p>
                                </Card.Description>
                            </Card.Content>
                        </Card>
                    </Card.Group>
                </div>
                <div>
                    <Grid columns='equal'>
                        <Grid.Row >
                            <Grid.Column>
                                <Image src='./assets/BOT.png' />
                            </Grid.Column>
                            <Grid.Column>
                                <Image src='./assets/emp.png' />
                            </Grid.Column>
                            <Grid.Column>
                                <Image src='./assets/TW.png' />
                            </Grid.Column>
                            <Grid.Column>
                                <Image src='./assets/Insituform.png' />
                            </Grid.Column>
                            <Grid.Column>
                                <Image src='./assets/DAYSON.png' />
                            </Grid.Column>
                            <Grid.Column>
                                <Image src='./assets/AMB.png' />
                            </Grid.Column>
                        </Grid.Row>
                    </Grid >
                </div >
                <div className="custom-link"><Container>
                    <span>In the News:</span>
                    <span><a href="">MSM eCOR in Electrical line</a></span>
                    <span><a href="">MSM eCOR - PCMHA Covid Screening</a></span>
                </Container></div>
            </div >
        )
    }
}

export default Home