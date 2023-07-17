export type RepaymentResponse = {
    repaymentAmount: number;
    totalInterest: number;
    endDate: string;
    monthlyRepayments: Array<MonthRepayment>;
};

export type MonthRepayment = {
    month: number;
    outstandingAmount: number;
    interest: number;
    repaymentAmount: number;
    balance: number;
};

export const makeRepaymentTableEntry = (month: number, balance: number, interest: number, repaymentAmount: number): MonthRepayment => {
    if (balance < repaymentAmount) {
        return {
            month: month,
            outstandingAmount: balance,
            repaymentAmount: balance,
            interest: interest,
            balance: 0
        };
    } else {
        const newBalance = balance - repaymentAmount + interest;
        return {
            month: month,
            outstandingAmount: balance,
            repaymentAmount: repaymentAmount,
            interest: interest,
            balance: newBalance
        };
    }
};

export const calculateRepaymentAmount = (loanAmount: number, loanPeriod: number, interestRate: number): RepaymentResponse => {
    const monthlyInterestRate = interestRate / 100 / 12;

    const repaymentAmount = loanAmount * (monthlyInterestRate / (1 - Math.pow(1 + monthlyInterestRate, -loanPeriod)));

    const totalInterest = repaymentAmount * loanPeriod - loanAmount;

    const endDate = new Date();
    endDate.setMonth(endDate.getMonth() + loanPeriod);

    const monthlyRepayments: Array<MonthRepayment> = [];
    let currentBalance = loanAmount;
    for (let i = 0; i < loanPeriod; i++) {
        const entry = makeRepaymentTableEntry(i + 1, currentBalance, currentBalance * monthlyInterestRate, repaymentAmount);
        monthlyRepayments.push(entry);
        currentBalance = entry.balance;
    }

    return {
        repaymentAmount: repaymentAmount,
        totalInterest: totalInterest,
        endDate: endDate.toISOString(),
        monthlyRepayments: monthlyRepayments
    };
};
