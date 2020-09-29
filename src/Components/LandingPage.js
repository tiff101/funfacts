import React from 'react';
import {Jumbotron, Container} from 'react-bootstrap';
/**
 * For fun, let's actually map this out!
 * I'd like a jumbotron
 * and then followed by some kind of card / gridlist in a carousel
 * Navbar at the top
 * @param {*} props 
 */
export default function LandingPage(){

    return(
        <div>
            <Jumbotron>
                <h1>
                    Welcome one and all... :)
                    <br/>
                    This is a header placeholder.
                </h1>
            </Jumbotron>
            <Container>
            <div>
                <h3>This is a placeholder for another section. Did you know...</h3>
            </div>
            <div>
                <h3>This is a placeholder for another section. Did you know OR NOT...</h3>
            </div>
            </Container>
        </div>

    )
}