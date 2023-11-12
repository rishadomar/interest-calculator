import { Container, Grid } from '@mui/material';
import { NavLink } from 'react-router-dom';
import GridCell from '../shared/GridCell';

const Main = () => {
    return (
        <Container sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={2}>
                <GridCell title='Home Loan' image='home.png' navigationPath='homeloan' />
                <GridCell title='Car Loan' image='car.png' navigationPath='carloan' />
                <GridCell title='Personal Loan' image='.png' navigationPath='personalloan' />
                <GridCell title='Education Loan' image='.png' navigationPath='educationloan' />
                <GridCell title='Credit card' image='creditcard.png' navigationPath='creditcard' />
                <GridCell title='Overdraft' image='.png' navigationPath='overdraft' />
                <GridCell title='Budgetting' image='.png' navigationPath='budgetting' />
            </Grid>
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

export default Main;
