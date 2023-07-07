import Navbar from "./Navbar";
import CreatePurchase from "./CreatePurchase";
import ViewPurchase from "./ViewPurchase";
import React from "react";
//always import React for react projects. states file type
import {BrowserRouter, Routes, Route} from "react-router-dom";

const App = () => {
    return(
        //functional classtype
        //inside Route tag: specifies different paths/links on site
        //routes to different links depending on element
        <main>
            <Navbar />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<ViewPurchase/>}/>
                    <Route path="/create" element = {<CreatePurchase/>}/>
                </Routes>
            </BrowserRouter>
        </main>
    );
};

export default App;
//always export it bc want to use this component in a different file