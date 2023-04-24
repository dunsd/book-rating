import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../components/Header";
import Library from "../components/Library";

const RouteSwitch = () => {
    return (
        <BrowserRouter>
            <div>
                <Header />
                <div className="mainContent">
                    <Routes>
                        <Route element={<Library />} path="/" exact={true} />                        
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default RouteSwitch;