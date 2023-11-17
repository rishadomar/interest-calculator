import { Button, TextField, InputAdornment, Divider, Grid, Container } from '@mui/material';
import RepaymentTable from '../shared/RepaymentTable';
import { useEffect, useState } from 'react';
import dayjs, { Dayjs } from 'dayjs';
import DateSelector from '../shared/DateSelector';
import { MonthRepayment, calculateRepaymentAmount } from '../shared/calculations';
import CurrencyInput from '../shared/NumericInput';

const HomeCalculator = () => {
    const [purchaseAmount, setPurchaseAmount] = useState<number | string>(1200000);
    const [depositAmount, setDepositAmount] = useState<number | string>('');
    const [loanAmount, setLoanAmount] = useState<number | string>('');
    const [interestRate, setInterestRate] = useState<number>(8);
    const [loanPeriod, setLoanPeriod] = useState<number>(12);
    const [repaymentAmount, setRepaymentAmount] = useState('');
    const [totalInterest, setTotalInterest] = useState('');
    const [endDate, setEndDate] = useState('');
    const [startDate, setStartDate] = useState<Dayjs | null>(dayjs('2023-12-01'));
    const [repaymentTableData, setRepaymentTableData] = useState<Array<MonthRepayment>>([]);

    useEffect(() => {
        if (purchaseAmount === '' || depositAmount === '') {
            setLoanAmount('');
            return;
        }
        setLoanAmount((purchaseAmount as number) - (depositAmount as number));
    }, [purchaseAmount, depositAmount]);

    return (
        <Container sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={2}>
                <Grid item xs={8}>
                    <CurrencyInput
                        label={'Purchase amount'}
                        name={'purchaseAmount'}
                        value={purchaseAmount}
                        onChange={(value) => setPurchaseAmount(value === '' ? 0 : parseFloat(value))}
                    />
                </Grid>

                <Grid item xs={8}>
                    <CurrencyInput
                        label={'Deposit amount'}
                        name={'depositAmount'}
                        value={depositAmount}
                        onChange={(value) => setDepositAmount(value === '' ? 0 : parseFloat(value))}
                    />
                </Grid>

                <Grid item xs={8}>
                    <CurrencyInput
                        label={'Loan amount'}
                        name={'loanAmount'}
                        value={loanAmount}
                        onChange={(value) => setLoanAmount(value === '' ? 0 : parseFloat(value))}
                    />
                </Grid>

                <Grid item xs={8}>
                    <TextField
                        id='interest-rate'
                        value={interestRate}
                        onChange={(e) => setInterestRate(e.target.value === '' ? 0 : parseFloat(e.target.value))}
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
                        onChange={(e) => setLoanPeriod(e.target.value === '' ? 0 : parseFloat(e.target.value))}
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

export default HomeCalculator;
