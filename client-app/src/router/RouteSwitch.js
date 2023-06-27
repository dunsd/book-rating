import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../components/Header";
import Library from "../components/Library";
import Profile from "../components/Profile";
import Home from "../components/Home";
import Footer from "../components/Footer";
import { useState } from "react";
import "../App.scss";

const RouteSwitch = () => {

  //Current user is used for db collections
  const [currentUser, setCurrentUser] = useState("");

  const changeUser = (userInfo) => {
    setCurrentUser(userInfo);
  };

  const signOut = () => {
    setCurrentUser(null);
  }

  return (
    <BrowserRouter>
      <div className="mainPage">
        <Header />
        <div className="main-content">
          <Routes>
            <Route element={<Home />} path="/" exact={true} />
            <Route
              element={<Library currentUser={currentUser} />}
              path="/library"
              exact={true}
            />
            <Route
              element={<Profile 
                changeUser={changeUser}
                signOut={signOut}
                />}
              path="/profile"
            />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default RouteSwitch;
