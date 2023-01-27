import React from 'react';
import {Button, FormControl, InputAdornment, InputLabel, OutlinedInput, TextField} from "@mui/material";
import Container from "@mui/material/Container";
import {authContext} from "../context/authContext";
import {Link, useNavigate} from "react-router-dom";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import {FacebookOutlined, Google, Visibility, VisibilityOff} from "@mui/icons-material";
import Box from "@mui/material/Box";
import AlertMessage from "./AlertMessage";

const LoginUser = () => {

    const navigate = useNavigate();

    const {loginUser, AuthRoute, registerWithGoogle} = React.useContext(authContext);
    const [showPassword, setShowPassword] = React.useState(false);

    const [error, setError] = React.useState();

    const [user, setUser] = React.useState({
        email: '',
        password: '',
    });
    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }
    const handleLogin = async() => {
        try {
            await loginUser(user.email, user.password);
            navigate('/posts')

        }catch (e) {
            console.log(e.code)
            if (e.code === 'auth/wrong-password'){
                setError("La contraseña es incorrecta")
                setUser({
                    email: '',
                    password: '',
                })
            }else {
                setError("El usuario no se encuentra registrado");
                setUser({
                    email: '',
                    password: '',
                })
                navigate('/register')
            }
        }
    }
    const handleRegisterWithGoogle = async () => {
        try {
            await registerWithGoogle()
        }catch (e) {
            setError(e.message)
        }
    }

    const handleClickShowPassword = () => {
        setShowPassword(true)
    }
    return (
        <AuthRoute>
            <Container sx={{mt: 20, display:'flex', justifyContent: 'center'}}>
                <FormControl sx={{boxShadow: 3, p: 5, borderRadius: '10px'}}>
                    {
                        error && <AlertMessage message={error} />
                    }
                    <TextField
                        error={!!error}
                        sx={{width: 500, mb: 3}}
                        label="Ingrese el correo Electronico"
                        variant="outlined"
                        name="email"
                        value={user.email}
                        onChange={handleChange}
                    />
                    <FormControl >
                        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                        <OutlinedInput
                            sx={{width: 500}}
                            error={!!error}
                            id="outlined-adornment-password"
                            onChange={handleChange}
                            name="password"
                            value={user.password}
                            type={showPassword ? 'text' : 'password'}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        edge="end"
                                        onClick={handleClickShowPassword}
                                    >
                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            }
                            label="Password"
                        />
                    </FormControl>
                    <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
                        <Typography
                            sx={{
                                m:2,cursor: 'pointer',
                                ":hover": '#efefef'
                        }} variant="span"
                        >Olvidaste tu contraseña?
                        </Typography>
                        <Link to="/register" style={{ color: 'inherit', margin: '15px', textDecoration: 'inherit'}}>
                            <Typography sx={{m:2, cursor: 'pointer', ":hover": '#efefef'}} variant="span">Registrarse</Typography>
                        </Link>
                    </Box>
                    <Button onClick={handleLogin} variant="outlined" sx={{mt: 3}}>Iniciar Sesion</Button>
                    <Box sx={{display:'flex', justifyContent: 'center', columnGap: 10, mt: 5}}>
                        <IconButton
                            sx={{width: 80}}
                            onClick={handleRegisterWithGoogle}
                        >
                            <Google sx={{fontSize: 60, color: '#1976d2'}}/>
                        </IconButton>
                        <IconButton sx={{width: 80}}>
                            <FacebookOutlined sx={{fontSize: 60, color: '#1976d2'}}/>
                        </IconButton>
                    </Box>
                </FormControl>
            </Container>
        </AuthRoute>
    )
};

export default LoginUser;