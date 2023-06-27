import React, { useState } from "react";
import { Button } from "react-bootstrap";
import RegisterForm from "./RegisterForm";
import SignInForm from "./SignInForm";

const Profile = ({changeUser}) => {

  const [toggleSignIn, setToggleSignIn] = useState(false);
  const [toggleRegister, setToggleRegister] = useState(false);

  const toggleSignInForm = () => {
      setToggleSignIn(prevState => !prevState)
      setToggleRegister(false);
  }
  const toggleRegisterForm = () => {
    setToggleRegister(prevState => !prevState)
    setToggleSignIn(false);
}
   
  return (
    <div>
      <Button onClick={toggleSignInForm}>
        Login
      </Button>
      <Button onClick={toggleRegisterForm}>
        Register
      </Button>
      { toggleRegister && <RegisterForm />}
      {toggleSignIn && <SignInForm />}
    </div>
  );
};

export default Profile;
