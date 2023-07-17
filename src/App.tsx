import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Form from './Form';

const darkTheme = createTheme({
    palette: {
        mode: 'dark'
    }
});

function App() {
    return (
        <ThemeProvider theme={darkTheme}>
            <CssBaseline />
            <Form />
        </ThemeProvider>
    );
}

export default App;

