import {Outlet} from 'react-router-dom';
import React from "react";
import Header from "../compoments/Header";
import Footer from "../compoments/Footer";

const Root = () => {
    return (
        <div className="wrapper">
            <Header/>
            <div className="main">
                <Outlet/>
            </div>
            <Footer/>
        </div>
    );
};

export default Root;