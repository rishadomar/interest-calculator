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

/**
 * Calculates the repayment amount, total interest, end date, and monthly repayments for a loan.
 * @param loanAmount The amount of the loan.
 * @param loanPeriod The period of the loan in months.
 * @param interestRate The interest rate of the loan.
 * @returns An object containing the repayment amount, total interest, end date, and monthly repayments.
 */
export const calculateRepaymentAmount = (loanAmount: number, loanPeriod: number, interestRate: number): RepaymentResponse => {
    // Calculate the monthly interest rate.
    const monthlyInterestRate = interestRate / 100 / 12;

    // Calculate the repayment amount.
    const repaymentAmount = loanAmount * (monthlyInterestRate / (1 - Math.pow(1 + monthlyInterestRate, -loanPeriod)));

    // Calculate the total interest.
    const totalInterest = repaymentAmount * loanPeriod - loanAmount;

    // Calculate the end date.
    const endDate = new Date();
    endDate.setMonth(endDate.getMonth() + loanPeriod);

    // Calculate the monthly repayments.
    const monthlyRepayments: Array<MonthRepayment> = [];
    let currentBalance = loanAmount;
    for (let i = 0; i < loanPeriod; i++) {
        const entry = makeRepaymentTableEntry(i + 1, currentBalance, currentBalance * monthlyInterestRate, repaymentAmount);
        monthlyRepayments.push(entry);
        currentBalance = entry.balance;
    }

    // Return an object containing the repayment amount, total interest, end date, and monthly repayments.
    return {
        repaymentAmount: repaymentAmount,
        totalInterest: totalInterest,
        endDate: endDate.toISOString(),
        monthlyRepayments: monthlyRepayments
    };
};
