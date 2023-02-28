import React from 'react';
import {Button, FormControl, TextField} from "@mui/material";
import Container from "@mui/material/Container";
import {addPost} from '../services/createPost';
import {authContext} from "../context/authContext";
const FormPost = () => {

    const {currentUser } = React.useContext(authContext);
    console.log(currentUser.uid)

    const [formPost, setFormPost] = React.useState({
        titulo: '',
        descripcion: '',
        autor: '',
        url: ''
    })

    const handleSendForm = async () => {
        try {
            await addPost(formPost);
        }catch (e) {
            console.error(e)
        }
    }
    const handleFormPost = (e) => {
        setFormPost({
            ...formPost,
            idUser: currentUser.uid,
            [e.target.name] : e.target.value
        })
    }

    return (
        <Container sx={{mt: 20, display:'flex', justifyContent: 'center', width:'40%', flexDirection: 'column'}}>
            <FormControl sx={{display: 'flex', gap: 3}}>
                <TextField
                    id="outlined-name"
                    label="Titulo"
                    onChange={handleFormPost}
                    name="titulo"
                    value={formPost.titulo}
                />
                <TextField
                    id="outlined-name"
                    label="Descripcion"
                    value={formPost.descripcion}
                    onChange={handleFormPost}
                    name="descripcion"
                />
                <TextField
                    id="outlined-name"
                    label="Autor"
                    name="autor"
                    value={formPost.autor}
                    onChange={handleFormPost}
                />
                <TextField
                    id="outlined-name"
                    label="URL"
                    name="url"
                    value={formPost.url}
                    onChange={handleFormPost}
                />
                <Button
                    variant="contained" disableElevation
                    onClick={handleSendForm}
                >
                    Crear post
                </Button>
            </FormControl>
        </Container>
    );
};

export default FormPost;