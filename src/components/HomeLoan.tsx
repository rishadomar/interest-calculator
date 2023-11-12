import { Box, Button, Container, Tab, Tabs } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import HomeIntroduction from './HomeIntroduction';
import HomeCalculator from './HomeCalculator';
import TabPanel from '../shared/TabPanel';
import { SyntheticEvent, useState } from 'react';
import HomeOther from './HomeOther';

const HomeLoan = () => {
    const navigate = useNavigate();
    const [value, setValue] = useState(0);

    return (
        <Container sx={{ mt: 4, mb: 4 }}>
            <Button variant='contained' color='secondary' onClick={() => navigate(-1)}>
                Back
            </Button>
            <h1>Home Loan</h1>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={(event: SyntheticEvent, newValue: any) => setValue(newValue)} aria-label='Tabs'>
                    <Tab label='Calculator' />
                    <Tab label='Introduction' />
                    <Tab label='Other' />
                </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
                <HomeCalculator />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <HomeIntroduction />
            </TabPanel>
            <TabPanel value={value} index={2}>
                <HomeOther />
            </TabPanel>
        </Container>
    );
};

export default HomeLoan;
