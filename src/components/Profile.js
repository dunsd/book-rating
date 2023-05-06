import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";

const Profile = ({changeUser}) => {
    const [userName, setUserName] = useState("");

    const handleChange = (event) => {
        setUserName(event.target.value);
    }
  return (
    <div>
      <Form className="userForm">
        <Form.Group className="formInput m-1" controlId="userName">
            <Form.Label>Enter Username</Form.Label>
            <Form.Control 
            type="text"
            className="inputControl"
            name="username"
            value={userName}
            onChange={handleChange}
            />
        </Form.Group>
        <Button variant="secondary"
        onClick={changeUser}>Change User</Button>
      </Form>
    </div>
  );
};

export default Profile;
