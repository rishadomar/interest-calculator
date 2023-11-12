import { Grid } from '@mui/material';
import { NavLink } from 'react-router-dom';

type GridCellProps = {
    title: string;
    image: string;
    navigationPath: string;
};

const GridCell = ({ title, image, navigationPath }: GridCellProps) => {
    return (
        <Grid item xs={12} sm={6} md={4} lg={3}>
            <img src={`${process.env.PUBLIC_URL}/assets/${image}`} alt={title} style={{ width: '100%', height: 'auto' }} />
            <NavLink to={`/${navigationPath}`}>{title}</NavLink>
        </Grid>
    );
};

export default GridCell;
