import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function TabPanel({ children, value, index, ...other }: any) {
    return (
        <div
            role='tabpanel'
            hidden={value !== index}
            id={`ai-demo-tabpanel-${index}`}
            aria-labelledby={`ai-demo-tab-${index}`}
            style={{ margin: '20px' }}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

export default TabPanel;
