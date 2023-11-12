import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Routes, Route, Navigate } from 'react-router-dom';
import Main from './components/Main';
import HomeLoan from './components/HomeLoan';
import CarLoan from './components/CarLoan';

const darkTheme = createTheme({
    palette: {
        mode: 'dark'
    }
});

function App() {
    return (
        <ThemeProvider theme={darkTheme}>
            <CssBaseline />
            <Routes>
                <Route path='/' element={<Main />} />
                <Route path='/main' element={<Main />} />
                <Route path='/homeloan' element={<HomeLoan />} />
                <Route path='/carloan' element={<CarLoan />} />
                <Route path='*' element={<Navigate replace to='/main' />} />
            </Routes>
        </ThemeProvider>
    );
}

export default App;
