import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";

const SignInForm = ({changeUser}) => {
    const [userLogin, setUserLogIn] = useState({
        email: "",
        password: ""
      });
  
      const handleChange = (event) => {
          setUserLogIn((prevState) => ({
            ...prevState,
            [event.target.name]: event.target.value,
          }));
      };
  
      const {email,  password } = userLogin
      const loginUser = async (e) => {
        e.preventDefault();
        const logUser = {
          email,
          password
        }
        console.log(logUser);
  
        try {
          const response = await fetch("http://localhost:5000/api/user/login", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(logUser),
          })
          const userInfo = await response.json();
          console.log(userInfo);
          changeUser(userInfo);
        }
        catch (err) {
          console.log(err);
        }
      }

    return (
        <div>
<Form className="userForm">
        <Form.Group className="formInput m-1" controlId="email">
          <Form.Label>Enter Email</Form.Label>
          <Form.Control
          type="email"
          className="inputControl"
          name="email"
          value={userLogin.email}
          onChange={event => handleChange(event)}
          />
        </Form.Group>
        <Form.Group className="formInput m-1" controlId="password">
          <Form.Label>Enter Password</Form.Label>
          <Form.Control
          type="password"
          className="inputControl"
          name="password"
          value={userLogin.password}
          onChange={event => handleChange(event)}
          />
        </Form.Group>
        <Button variant="secondary"
        onClick={(e) => loginUser(e)}>Sign In User</Button>
      </Form>
        </div>
    )
}
export default SignInForm;