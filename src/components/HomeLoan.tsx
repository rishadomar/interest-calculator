import { Button, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Form from './Form';

const HomeLoan = () => {
    const navigate = useNavigate();

    return (
        <Container sx={{ mt: 4, mb: 4 }}>
            <Button variant='contained' color='secondary' onClick={() => navigate(-1)}>
                Back
            </Button>
            <h1>Home Loan</h1>
            <img src={process.env.PUBLIC_URL + '/assets/home.png'} alt='home' width='500' height='300' />
            <h2>Introduction</h2>
            <h2>Calculator</h2>
            <Form />
            <h2>Other expenses</h2>
            <h2>Flat/self standing</h2>
            <h2>Interest rate</h2>
            <h2>Affordability</h2>
            <h2>Types of loans</h2>
            <h2>Repayment</h2>
            <h2>Insurance</h2>
            <h2>Application process</h2>
            <h2>Documents required</h2>
            <h2>Pre-approved</h2>
            <h2>Rates & Electricity</h2>
            <h2>Maintenance</h2>
        </Container>
    );
};

export default HomeLoan;
