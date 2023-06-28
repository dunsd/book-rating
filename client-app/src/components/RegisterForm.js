import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";

const RegisterForm = ({ apiURL }) => {
    const [userRegister, setUserRegister] = useState({
        username: "",
        email: "",
        displayName: "",
        password: ""
      });
  
      const handleChange = (event) => {
          setUserRegister((prevState) => ({
            ...prevState,
            [event.target.name]: event.target.value,
          }));
      };
  
      const {username, email, displayName, password } = userRegister
      const registerUser = async (e) => {
        console.log(userRegister.displayName)
        e.preventDefault();
        const newUser = {
          username,
          email,
          displayName,
          password
        }
  
        try {
          fetch(apiURL +"/user/register", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(newUser),
          })
        }
        catch (err) {
          console.log(err);
        }
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
            value={userRegister.username}
            onChange={event => handleChange(event)}
            />
        </Form.Group>
        <Form.Group className="formInput m-1" controlId="email">
          <Form.Label>Enter Email</Form.Label>
          <Form.Control
          type="email"
          className="inputControl"
          name="email"
          value={userRegister.email}
          onChange={event => handleChange(event)}
          />
        </Form.Group>
        <Form.Group className="formInput m-1" controlId="displayName">
          <Form.Label>Enter Display Name</Form.Label>
          <Form.Control
          type="text"
          className="inputControl"
          name="displayName"
          value={userRegister.displayName}
          onChange={event => handleChange(event)}
          />
        </Form.Group>
        <Form.Group className="formInput m-1" controlId="password">
          <Form.Label>Enter Password</Form.Label>
          <Form.Control
          type="password"
          className="inputControl"
          name="password"
          value={userRegister.password}
          onChange={event => handleChange(event)}
          />
        </Form.Group>
        <Button variant="secondary"
        onClick={(e) => registerUser(e)}>Register New User</Button>
      </Form>
        </div>
    )
}
export default RegisterForm;