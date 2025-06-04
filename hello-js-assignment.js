function taxCalculator (Harun) {
   const income = 100000;
   const expense = 30000;
   if (expense > income) {
        return 'Invalid input'
   }
   const remainingMoney = income - expense;
   const taxRate = .20;
   const totalTax = remainingMoney * taxRate;
   return totalTax;
   
}   

const result = taxCalculator ();
console.log (result);