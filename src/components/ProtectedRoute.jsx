import React from 'react';
import {authContext} from "../context/authContext";
import {Navigate, Outlet} from "react-router-dom";

const ProtectedRoute = () => {

    const {currentUser} = React.useContext(authContext);

    if (currentUser === null) {
        return <Navigate to="/login" />
    }
    return (
        <Outlet />
    );
};

export default ProtectedRoute;