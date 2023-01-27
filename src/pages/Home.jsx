import React from 'react';

import '../styles/Home.css';
import VideoPost from "../components/VideoPost";

const Home = () => {
    return (
        <div className="home">
            <VideoPost />
        </div>
    );
};

export {Home};