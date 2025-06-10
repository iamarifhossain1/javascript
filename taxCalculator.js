

function taxCalculator (incomeTax, expenseTax) {
    const income = 100000;
    const expense = 30000;
    const remainingMoney = income - expense;
    if (expense > income) {
        return 'Invalid input';
    }

    const taxRate = .20;
    const totalTax = remainingMoney * taxRate;
    return totalTax;
}

const result = taxCalculator (5000, 2000);
console.log ( 'Total tax on remaining money:', result, 'Taka');