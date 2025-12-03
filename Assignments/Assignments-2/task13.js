function formatSalesData() {
    // 1. Define the sales array
    const sales = [2500, 4000, 1800, 3200, 5000];
    let report = '';

    // 2. Use a 'for' loop to iterate through the array
    for (let i = 0; i < sales.length; i++) {
        // i starts at 0, so we add 1 for the human-readable day number
        const dayNumber = i + 1; 
        
        // Get the sales value for the current day
        const salesAmount = sales[i];
        
        // 3. Format the string and append it to the report, 
        // using '\n' for a new line in the string.
        report += `Day ${dayNumber}: ₹${salesAmount}\n`;
    }

    // Use trim() to remove the final trailing newline character
    return report.trim(); 
}
console.log(formatSalesData()); 