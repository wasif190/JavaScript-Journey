// Used to reduce an array to a single value

const expenses = [
    { description: 'Rent', amount: 1200 },
    { description: 'Groceries', amount: 200 },
    { description: 'Utilities', amount: 150 },
    { description: 'Entertainment', amount: 100 }
];
  
// Using reduce to calculate the total amount spent
const totalAmount = expenses.reduce((accumulator, expense) => accumulator + expense.amount, 0);
  
  console.log(`Total Amount Spent: $${totalAmount}`); // $1650
  