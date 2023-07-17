import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { MonthRepayment } from './calculations';

type RepaymentTableProps = {
    data: MonthRepayment[];
};

const RepaymentTable = ({ data }: RepaymentTableProps) => {
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label='simple table'>
                <TableHead>
                    <TableRow>
                        <TableCell align='right'>Payment#</TableCell>
                        <TableCell align='right'>Starting Balance</TableCell>
                        <TableCell align='right'>Interest</TableCell>
                        <TableCell align='right'>Payment</TableCell>
                        <TableCell align='right'>Balance</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((row) => (
                        <TableRow key={row.month} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                            <TableCell align='right' component='th' scope='row'>
                                {row.month}
                            </TableCell>
                            <TableCell align='right'>{row.outstandingAmount.toFixed(2)}</TableCell>
                            <TableCell align='right'>{row.interest.toFixed(2)}</TableCell>
                            <TableCell align='right'>{row.repaymentAmount.toFixed(2)}</TableCell>
                            <TableCell align='right'>{row.balance.toFixed(2)}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default RepaymentTable;
