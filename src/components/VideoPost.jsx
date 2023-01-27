import React from 'react';
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {Rating} from "@mui/material";
import ReactPlayer from "react-player";

const VideoPost = () => {
    return (
        <Container maxWidth="md" sx={{mt: 2}}>
            <Box sx={{ bgcolor: '#cfe8fc', height: 500 }} >
                <Box sx={{
                    width: '100%',
                    justifyContent: 'center',
                    display: 'flex',
                    bgcolor:'#efefef',
                    py:2
                }}>
                    <Typography variant="h5">
                        Crear el primer post a la comunidad
                    </Typography>
                </Box>
                <Box sx={{
                    width: '100%',
                    justifyContent: 'center',
                    display: 'flex',
                }}>
                    <Rating sx={{
                        color: 'rgba(44,203,27,0.97)'}}
                            name="read-only" value={3}
                            readOnly
                    />
                </Box>
                <Box sx={{display: 'flex', justifyContent: 'center', mt:1}}>
                    <ReactPlayer url={'https://www.youtube.com/watch?v=bTSWzddyL7E&t=275s'} />
                </Box>
            </Box>
        </Container>
    );
};

export default VideoPost;