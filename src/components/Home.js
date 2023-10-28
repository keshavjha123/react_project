import React from "react";
import { Jumbotron, Container, Button } from 'reactstrap';
import Course from "./Course";



const Home=() => {
    return (
        <div className="text-center">
            <h1>Learn code with Keshav</h1>
            <Container>
                <Button color="primary">Start</Button>
            </Container>
            
        </div>
    );
}

export default Home;