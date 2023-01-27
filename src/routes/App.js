import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {Layout} from "../containers/Layout";
import {Home} from "../pages/Home";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Posts from "../pages/Posts";
import {AuthProvider} from "../context/authContext";
import ProtectedRoute from "../components/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
        <AuthProvider>
            <Layout>
                <Routes>
                    <Route exaxt path="/" element={<Home />} />
                    <Route exact path="/register" element={<Register />} />
                    <Route exact path="/login" element={<Login />} />
                    <Route element={<ProtectedRoute />}>
                        <Route exact path="/posts" element={<Posts />} />
                    </Route>
                    <Route path="*" element={<h1> Not Found </h1> } />
                </Routes>
            </Layout>
        </AuthProvider>
    </BrowserRouter>
  );
}

export {App};
