import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../components/Header";
import Library from "../components/Library";
import Profile from "../components/Profile";
import '../App.scss';

const RouteSwitch = () => {
    return (
        <BrowserRouter>
            <div className="mainPage">
                <Header />
                <div className="main-content">
                    <Routes>
                        <Route element={<Library />} path="/" exact={true} />
                        <Route element={<Profile />} path="/profile" />                        
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default RouteSwitch;