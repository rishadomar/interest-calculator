import { Container, Grid } from '@mui/material';
import GridCell from '../shared/GridCell';

const Main = () => {
    return (
        <Container sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={2}>
                <GridCell title='Home Loan' image='home.png' navigationPath='homeloan' />
                <GridCell title='Car Loan' image='car.png' navigationPath='carloan' />
                <GridCell title='Personal Loan' image='coming_soon.png' navigationPath='personalloan' />
                <GridCell title='Education Loan' image='coming_soon.png' navigationPath='educationloan' />
                <GridCell title='Credit card' image='creditcard.png' navigationPath='creditcard' />
                <GridCell title='Overdraft' image='coming_soon.png' navigationPath='overdraft' />
                <GridCell title='Budgetting' image='coming_soon.png' navigationPath='budgetting' />
            </Grid>
        </Container>
    );
};

export default Main;
