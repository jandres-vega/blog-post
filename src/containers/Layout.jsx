import React from 'react';
import {Header} from "../components/Header";
import {Footer} from "../components/Footer";


const Layout = ({children}) => {
    return (
        <div className="main">
            <Header />
            {children}
            <Footer />
        </div>
    );
};

export {Layout};