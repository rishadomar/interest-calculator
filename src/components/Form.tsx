import { Button, TextField, InputAdornment, Divider, Grid, Container } from '@mui/material';
import RepaymentTable from '../shared/RepaymentTable';
import { useState } from 'react';
import dayjs, { Dayjs } from 'dayjs';
import DateSelector from '../shared/DateSelector';
import { MonthRepayment, calculateRepaymentAmount } from '../shared/calculations';
import CurrencyInput from '../shared/NumericInput';

const Form = () => {
    const [loanAmount, setLoanAmount] = useState<number | string>(20000);
    const [interestRate, setInterestRate] = useState<number | string>(8);
    const [loanPeriod, setLoanPeriod] = useState<number | string>(12);
    const [repaymentAmount, setRepaymentAmount] = useState('');
    const [totalInterest, setTotalInterest] = useState('');
    const [endDate, setEndDate] = useState('');
    const [startDate, setStartDate] = useState<Dayjs | null>(dayjs('2023-08-01'));
    const [repaymentTableData, setRepaymentTableData] = useState<Array<MonthRepayment>>([]);

    return (
        <Container sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={2}>
                <Grid item xs={8}>
                    <TextField
                        id='loan-amount'
                        value={loanAmount}
                        onChange={(e) => setLoanAmount(e.target.value === '' ? '' : parseFloat(e.target.value))}
                        label='Loan amount'
                        variant='outlined'
                        sx={{ m: 2, width: '25ch' }}
                        helperText='Enter the amount of the loan'
                    />
                </Grid>

                <Grid item xs={8}>
                    <TextField
                        id='interest-rate'
                        value={interestRate}
                        onChange={(e) => setInterestRate(e.target.value === '' ? '' : parseFloat(e.target.value))}
                        label='Interest rate'
                        variant='outlined'
                        sx={{ m: 2, width: '25ch' }}
                        InputProps={{
                            endAdornment: <InputAdornment position='end'>%</InputAdornment>
                        }}
                        helperText='Enter the annual interest rate'
                    />
                </Grid>

                <Grid item xs={8}>
                    <TextField
                        id='loan-period'
                        value={loanPeriod}
                        onChange={(e) => setLoanPeriod(e.target.value === '' ? '' : parseFloat(e.target.value))}
                        label='Loan period'
                        variant='outlined'
                        InputProps={{
                            endAdornment: <InputAdornment position='end'>months</InputAdornment>
                        }}
                        sx={{ m: 2, width: '25ch' }}
                        helperText={typeof loanPeriod !== 'number' ? 'Enter a loan period in months' : loanPeriod / 12 + ' years'}
                    />
                </Grid>

                <Grid item xs={8}>
                    <DateSelector
                        label={'Start date of loan'}
                        helperText='This is the date when the loan amount will be transferred into your account'
                        setStartDate={setStartDate}
                        sx={{ m: 2, width: '20ch' }}
                    />
                </Grid>

                <Grid item xs={8}>
                    <Button
                        disabled={typeof loanAmount !== 'number' || typeof loanPeriod !== 'number' || typeof interestRate !== 'number'}
                        variant='contained'
                        onClick={() => {
                            if (typeof loanAmount !== 'number' || typeof loanPeriod !== 'number' || typeof interestRate !== 'number') {
                                return;
                            }
                            const repaymentResponse = calculateRepaymentAmount(loanAmount, loanPeriod, interestRate);
                            setRepaymentTableData(repaymentResponse.monthlyRepayments);
                            console.log('Repayment response: ', repaymentResponse);
                            setRepaymentAmount(repaymentResponse.repaymentAmount.toFixed(2));
                            setTotalInterest(repaymentResponse.totalInterest.toFixed(2));
                            setEndDate(startDate?.add(loanPeriod, 'month').format('YYYY-MM-DD') || '');
                        }}
                        sx={{ m: 2, width: '20ch' }}
                    >
                        Calculate
                    </Button>
                </Grid>

                <Grid item xs={8}>
                    <TextField
                        id='repayment-amount'
                        value={repaymentAmount}
                        onChange={(e) => setRepaymentAmount(e.target.value)}
                        label='Repayment amount'
                        variant='outlined'
                        sx={{ m: 2, width: '25ch' }}
                    />
                </Grid>

                <Grid item xs={8}>
                    <TextField
                        id='total-interest'
                        value={totalInterest}
                        aria-readonly={true}
                        onChange={(e) => setTotalInterest(e.target.value)}
                        label='Total interest'
                        variant='outlined'
                        sx={{ m: 2, width: '25ch' }}
                    />
                </Grid>

                <Grid item xs={8}>
                    <TextField
                        id='end-date'
                        value={endDate}
                        onChange={(e) => setEndDate(e.target.value)}
                        label='End date of repayments'
                        variant='outlined'
                        sx={{ m: 2, width: '25ch' }}
                    />
                </Grid>
            </Grid>

            <Divider component='li' />

            <RepaymentTable data={repaymentTableData} />
        </Container>
    );
};
export default Form;
