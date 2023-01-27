import React from 'react';
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {Button, Checkbox, FormControl, FormControlLabel, FormGroup,TextField} from "@mui/material";
import {FacebookOutlined, Twitter, GitHub} from '@mui/icons-material';
import '../styles/Footer.css';
import IconButton from "@mui/material/IconButton";

const Footer = () => {
    return (
        <footer className="footer">
            <Box sx={{display: 'grid', gridTemplateColumns: 'repeat(2, 2.5fr)', justifyItems: 'center'}}>
                <Box sx={{display: 'flex', rowGap: 2, alignItems: 'center', flexDirection: 'column', justifyContent: 'center'}}>
                    <Typography variant="p">
                        Development by Andres Vega GDE Firebase
                    </Typography>
                    <Box sx={{ width: '100%'}}>
                        <IconButton  sx={{mx:5}}>
                            <FacebookOutlined/>
                        </IconButton>
                        <IconButton>
                            <Twitter />
                        </IconButton>
                        <IconButton  sx={{mx:5}}>
                            <GitHub />
                        </IconButton>
                    </Box>
                </Box>
                <Box sx={{display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)'}}>
                    <Box>
                        <FormControl>
                            <TextField id="standard-basic" label="Nombres" variant="standard" />
                            <TextField id="standard-basic" label="Email" variant="standard" />
                        </FormControl>
                        <FormGroup sx={{display: 'flex',  flexDirection: 'row'}}>
                            <FormControlLabel control={<Checkbox />} label="Comentarios" />
                            <FormControlLabel control={<Checkbox />} label="Reclamos" />
                            <FormControlLabel control={<Checkbox />} label="Mejoras" />
                            <FormControlLabel control={<Checkbox  />} label="Otros" />
                        </FormGroup>
                    </Box>
                    <Box sx={{display: 'flex', flexDirection: 'column', mr: 2, rowGap: 3}}>
                        <label className="label-send">Comentarios</label>
                        <TextField
                            id="outlined-multiline-flexible"
                            label="Escribe un comentario"
                            multiline
                            maxRows={8}
                        />
                        <Button variant="outlined">Enviar</Button>
                    </Box>
                </Box>
            </Box>
        </footer>
    );
};

export {Footer};