function calculateTotalExpenses() {
    // The source array of monthly expenses
    const expenses = [2000, 1500, 3500, 4000];
    
    // 1. Use the 'reduce' method to sum all numbers in the array.
    // 'accumulator' (acc) holds the running total, and 'currentValue' (curr) is the current item.
    // We start the accumulation at 0.
    const totalSpent = expenses.reduce((acc, curr) => acc + curr, 0);

    // 2. Format and return the result
    return `Total Money Spent: ₹${totalSpent.toLocaleString('en-IN')}`;
}

console.log(calculateTotalExpenses());