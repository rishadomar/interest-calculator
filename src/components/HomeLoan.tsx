import { Button, Container } from '@mui/material';
import { useMediaQuery } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Form from './Form';

const HomeLoan = () => {
    const navigate = useNavigate();
    const isSmallScreen = useMediaQuery('(max-width:600px)');

    return (
        <Container sx={{ mt: 4, mb: 4 }}>
            <Button variant='contained' color='secondary' onClick={() => navigate(-1)}>
                Back
            </Button>
            <h1>Home Loan</h1>
            <img src={process.env.PUBLIC_URL + '/assets/home.png'} alt='home' width={isSmallScreen ? '300px' : '500px'} height='auto' />
            <h2>Introduction</h2>
            <p>
                Buying a home is one of the most exciting things you will do. Your own home - a place where you feel comfortable and safe.
            </p>
            <p>It is also one of the most important financial decisions you will make.</p>
            <p>
                Because the cost of a property is so high, it is a long-term commitment that will affect your lifestyle for many years to
                come.
            </p>
            <p>However, it is also a major investment that can provide you with financial security.</p>
            <p>An advantage I discovered is that it forces you to save your hard earned money every month.</p>
            <p>The tips and information provided here will make it easier for you.</p>
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
