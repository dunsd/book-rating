import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import RegisterForm from "./RegisterForm";
import SignInForm from "./SignInForm";

const Profile = ({changeUser}) => {
   
  return (
    <div>
      <RegisterForm />
      <SignInForm />
    </div>
  );
};

export default Profile;
