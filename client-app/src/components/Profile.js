import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";

const Profile = ({changeUser}) => {
    const [userLogin, setUserLogIn] = useState({
      username: "",
      email: "",
      displayName: "",
      password: ""
    });

    const handleChange = (event) => {
        //setUserLogIn(event.target.value);
        setUserLogIn((prevState) => ({
          ...prevState,
          [event.target.name]: event.target.value,
        }));
    };

    const {username, email, displayName, password } = userLogin
    const registerUser = async (e) => {
      console.log(userLogin.displayName)
      e.preventDefault();
      const newUser = {
        username,
        email,
        displayName,
        password
      }
      console.log(newUser);

      try {
        fetch("http://localhost:5000/api/user/register", {
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
            value={userLogin.username}
            onChange={event => handleChange(event)}
            />
        </Form.Group>
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
        <Form.Group className="formInput m-1" controlId="displayName">
          <Form.Label>Enter Display Name</Form.Label>
          <Form.Control
          type="text"
          className="inputControl"
          name="displayName"
          value={userLogin.displayName}
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
        onClick={(e) => registerUser(e)}>Change User</Button>
      </Form>
    </div>
  );
};

export default Profile;
