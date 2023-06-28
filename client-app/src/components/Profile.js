import React, { useState } from "react";
import { Button } from "react-bootstrap";
import RegisterForm from "./RegisterForm";
import SignInForm from "./SignInForm";

const Profile = ({ changeUser, signOut}) => {

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
      <div className="signBtnContainer">
      <Button variant="secondary" onClick={toggleSignInForm}>
        Login
      </Button>
      <Button variant="secondary" onClick={toggleRegisterForm}>
        Register
      </Button>
      <Button variant="secondary" onClick={signOut}>
        Sign Out
      </Button>
      </div>
      { toggleRegister && <RegisterForm changeUser={changeUser} />}
      {toggleSignIn && <SignInForm changeUser={changeUser} />}
    </div>
  );
};

export default Profile;
