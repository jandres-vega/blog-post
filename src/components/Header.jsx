import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import {Link} from 'react-router-dom';
import {Button, List, ListItem, ListItemButton, ListItemText} from "@mui/material";
import {authContext} from "../context/authContext";

const optionButtons = [
    {
        option: 'Todos los posts',
        to: '/all-posts',
    },
    {
        option: 'Mis posts',
        to: '/my-posts',
    },
    {
        option: 'crear post',
        to: '/create-post',
    },
    {
        option: 'Contactenos',
        to: '',
    }
]

const Header = () => {

    const {currentUser, signOutUser } = React.useContext(authContext);
    const handleSignOut = async() => {
        try {
            await signOutUser()
        }catch (e) {
            console.error(e)
        }
    }

    const handleClick = () => {
        if (!currentUser){
            alert("Necesitas inisiar sesion")
        }
    }


    return (
        <AppBar position="fixed">
            <Container maxWidth="xl" sx={{width: '100%'}}>
                <Toolbar disableGutters>
                    <Box sx={{ flexGrow: 2, display: { xs: 'none', md: 'flex' }, justifyContent: 'center'}}>
                        <Typography
                            variant="h4"
                            sx={{
                                display: {xs: 'none', md: 'flex'},
                                fontFamily: 'monospace',
                                letterSpacing: '.3rem',
                                fontWeight: 700,
                                color: 'inherit'
                            }}
                        >
                            <Link to="/" style={{ color: 'inherit', textDecoration: 'inherit'}}>BLOG POST COMMUNITY</Link>
                        </Typography>
                    </Box>
                    <Container maxWidth="xl" sx={{width: '50%'}}>
                        <Toolbar disableGutters>
                            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' },justifyContent: 'flex-start' }}>
                                {
                                    optionButtons.map(item => (
                                        <Link to={item.to} key={item.option} style={{ color: 'inherit', textDecoration: 'inherit'}}>
                                            <Button
                                                onClick={handleClick}
                                                sx={{ my: 2, color: 'white', display: 'block' }}
                                            >{item.option}
                                            </Button>
                                        </Link>
                                    ))
                                }
                            </Box>
                        </Toolbar>
                    </Container>
                    <Box sx={{display: { xs: 'none', md: 'flex' } }}>
                        <List>
                            <ListItem disablePadding>
                                {
                                    currentUser === null ?
                                        <>
                                            <ListItemButton sx={{ textAlign: 'center' }}>
                                                <Link to="/register" style={{ color: 'inherit', textDecoration: 'inherit'}}>
                                                    <ListItemText primary="Registrarse" />
                                                </Link>
                                            </ListItemButton>
                                            <ListItemButton sx={{ textAlign: 'center' }}>
                                                <Link to="/login" style={{ color: 'inherit', textDecoration: 'inherit'}}>
                                                    <ListItemText primary="Iniciar sesion" />
                                                </Link>
                                            </ListItemButton>
                                        </>:
                                        <ListItemButton sx={{ textAlign: 'center' }}>
                                            <Link to="/login" style={{ color: 'inherit', textDecoration: 'inherit'}}>
                                                <ListItemText onClick={handleSignOut} primary="Cerrar sesion" />
                                            </Link>
                                        </ListItemButton>
                                }
                            </ListItem>
                        </List>
                    </Box>
                    <Box sx={{
                        flexGrow: 0,
                        display: 'none'
                    }}
                    >
                        <Tooltip title="Open settings">
                            <IconButton sx={{ p: 0 }}>
                                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                            </IconButton>
                        </Tooltip>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export {Header};