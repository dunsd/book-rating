import React from "react";
import { Card } from "react-bootstrap";

const Home = () => {
    return (
        <div className="homeContent">
            <Card>
                <Card.Header as="h1">
                    Welcome to Realm Reviews
                </Card.Header>
                <Card.Body>
                    This is the place to be for recording your favourite books.
                    <br></br>
                    Head on over to the Library page to get started.
                </Card.Body>
            </Card>
        </div>
    )
}

export default Home;