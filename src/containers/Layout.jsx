import React from 'react';
// import '../styles/Layout.css';
import {Header} from "../components/Header";
import {Footer} from "../components/Footer";
import Box from "@mui/material/Box";


const Layout = ({children}) => {
    return (
        <>
            <Header />
            <Box sx={{height: 'auto', mt: 0}}>
                {children}
            </Box>
            {/*{children}*/}
            <Footer />
        </>
    );
};

export {Layout};