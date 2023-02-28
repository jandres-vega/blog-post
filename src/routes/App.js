import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {Layout} from "../containers/Layout";
import {Home} from "../pages/Home";
import Register from "../pages/Register";
import Login from "../pages/Login";
import {AuthProvider} from "../context/authContext";
import ProtectedRoute from "../components/ProtectedRoute";
import FormPost from "../pages/FormPost";
import MyPosts from "../pages/MyPosts";
import AllPosts from "../pages/AllPosts";
import NotFound from "../pages/NotFound";

function App() {
  return (
    <BrowserRouter>
        <AuthProvider>
            <Layout>
                <Routes>
                    <Route exaxt path="/" element={<Home />} />
                    <Route exact path="/register" element={<Register />} />
                    <Route exact path="/login" element={<Login />} />
                    <Route  element={<ProtectedRoute />}>
                        <Route exact path="/create-post" element={<FormPost />} />
                        <Route exact path="/my-posts" element={<MyPosts />} />
                        <Route exact path="/all-posts" element={<AllPosts />} />
                    </Route>
                    <Route path="*" element={<NotFound /> } />
                </Routes>
            </Layout>
        </AuthProvider>
    </BrowserRouter>
  );
}

export {App};
