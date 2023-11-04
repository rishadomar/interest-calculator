import { Container } from '@mui/material';
import { NavLink } from 'react-router-dom';

const Home = () => {
    return (
        <Container sx={{ mt: 4, mb: 4 }}>
            <h1>Home</h1>
            <NavLink to='/homeloan'>Home Loan</NavLink>
            <br />
            <NavLink to='/carloan'>Car Loan</NavLink>
            <br />
            <NavLink to='/personalloan'>Personal Loan</NavLink>
            <br />
            <NavLink to='/educationloan'>Education Loan</NavLink>
            <br />
            <NavLink to='/businessloan'>Business Loan</NavLink>
            <br />
            <NavLink to='/creditcard'>Credit card</NavLink>
            <br />
            <NavLink to='/overdraft'>Overdraft</NavLink>
            <br />
            <NavLink to='/budgetting'>Budgetting</NavLink>
        </Container>
    );
};

export default Home;
