import React from 'react';
import '../styles/Alert.css';
import Alert from '@mui/material/Alert';
import {Stack} from "@mui/material";
const AlertMessage = ({message}) => {

    return (
        <Stack sx={{ width: '100%', mb:1 }} spacing={2}>
            <Alert severity="error">{message}</Alert>
        </Stack>
    );
};

export default AlertMessage;