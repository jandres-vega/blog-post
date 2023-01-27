import React from 'react';
import '../styles/RegisterUser.css'
import Container from "@mui/material/Container";
import {
    Button,
    FormControl,
    FormHelperText,
    InputAdornment,
    InputLabel,
    OutlinedInput,
    TextField
} from "@mui/material";
import {authContext} from "../context/authContext";
import {useNavigate} from "react-router-dom";
import AlertMessage from "./AlertMessage";
import IconButton from "@mui/material/IconButton";
import { Visibility, VisibilityOff} from "@mui/icons-material";
const RegisterUser = () => {

    const { registerUser, AuthRoute } = React.useContext(authContext);
    const [showPassword, setShowPassword] = React.useState(false);
    const navigate = useNavigate();

    const [user, setUser] = React.useState({
        email: '',
        password: '',
    });

    const [error, setError] = React.useState();

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    }

    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }
    const handleRegister = async () => {
        try {
            await registerUser(user.email, user.password);
            navigate('/posts')

        }catch (e) {
            if (e.code === 'auth/invalid-email'){
                setError('Correo Incorrecto')
            }else if(e.code === 'auth/weak-password'){
                setError('Ingrese una contrase de 8 o mas digitos')
            }else {
                setError('El usuario ya se encuentra registrado')
            }
        }
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
                        id="outlined-weight-helper-text"
                        sx={{width: 500, mb: 3}}
                        label="Ingrese el correo Electronico"
                        variant="outlined"
                        onChange={handleChange}
                        value={user.email}
                        name="email"
                    />
                    <FormControl >
                        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                        <OutlinedInput
                            error={!!error}
                            id="outlined-adornment-password"
                            value={user.password}
                            onChange={handleChange}
                            name="password"
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
                        <FormHelperText
                            id="outlined-weight-helper-text"
                        >Ingresa una contraseña entre 8 o mas caracteres
                        </FormHelperText>
                    </FormControl>
                    <Button
                        disabled={!(user.password && user.email)}
                        onClick={handleRegister}
                        variant="outlined"
                        sx={{mt: 3}}>Registrarse</Button>
                </FormControl>
            </Container>
        </AuthRoute>
    );
};

export default RegisterUser;