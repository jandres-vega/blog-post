import React from 'react';
import Container from "@mui/material/Container";
import {Grid, Rating} from "@mui/material";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ReactPlayer from "react-player";
import {getDataPosts} from "../services/getPosts";
import {authContext} from "../context/authContext";

const MyPosts = () => {
    const {currentUser} = React.useContext(authContext);
    const [data, setData] = React.useState([]);

    React.useEffect(() => {
        getDataPosts(currentUser.uid).then(res => setData(res));
    },[])


    return (
        <Container sx={{mb: 20}}>
            <Grid container rowSpacing={1} sx={{mt:20}} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                {
                    data.map(data => (
                        <Grid item xs={6} >
                            <Box sx={{
                                width: '100%',
                                justifyContent: 'center',
                                display: 'flex',
                                bgcolor:'#efefef',
                                py:2
                            }}>
                                <Typography variant="h5">
                                    {data.titulo}
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
                                <ReactPlayer url={data.url} />
                            </Box>
                            <Box sx={{
                                width: '100%',
                                justifyContent: 'center',
                                display: 'flex',
                                bgcolor:'#efefef',
                                py:2
                            }}>
                                <Typography variant="p">
                                    {data.descripcion}
                                </Typography>
                            </Box>
                            <Box sx={{
                                width: '100%',
                                justifyContent: 'center',
                                display: 'flex',
                                bgcolor:'#223183',
                                py:2
                            }}>
                                <Typography variant="p">
                                    {data.autor}
                                </Typography>
                            </Box>
                        </Grid>
                    ))
                }
            </Grid>
        </Container>
    );
};

export default MyPosts;