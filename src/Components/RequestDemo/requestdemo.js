import React from 'react';
import { Container } from 'semantic-ui-react';
import { Grid } from 'semantic-ui-react';
import { Form } from 'semantic-ui-react';
import { Input, Button } from 'semantic-ui-react';
import '../style.css';
import { Divider } from 'semantic-ui-react';
import { Item } from 'semantic-ui-react';
import { Segment } from 'semantic-ui-react';

const RequestDemo = () => {
    return (
        <div>
            <Container >
                <Grid>
                    <Grid.Column width={9}>
                        <Segment basic><img className="custom-size" src="./assets/logo.png" /></Segment>
                    </Grid.Column>
                    <Grid.Column width={7}>
                        <Segment basic>
                            <h1>Request a Demo.</h1>
                            <p>Let us show you how MSM eCOR's health and safety software platform can let you
                                control your health and safety program.  You will have a LIVE view of your program.
                                Try our Risk Assessment Tool!!</p>
                            <Form>
                                <Form.Field control={Input}
                                    label='Comapany name' required />
                                <Form.Group widths='equal'>
                                    <Form.Field control={Input}
                                        label='First name' required />
                                    <Form.Field control={Input}
                                        label='Last name' required />
                                </Form.Group>
                                <Form.Field control={Input}
                                    label='Email' required />
                                <Item.Group horizontal='true'>
                                    <Item size='mini'>
                                        <div className="custom-block">
                                            <Item.Header><span>
                                                Protected by <strong>reCAPTCHA</strong>
                                            </span><br />
                                                <span>Privacy</span>
                                                <span>-</span>
                                                <span>Terms</span></Item.Header>
                                        </div>
                                        <div>  <img src="./assets/recaptcha.png" /></div>
                                    </Item></Item.Group>
                                <Button className="custom-button">Submit</Button></Form>
                        </Segment>
                    </Grid.Column>
                </Grid>
                <Divider />
            </Container>
            <div className="custom-footer"></div>
        </div>
    )
}

export default RequestDemo