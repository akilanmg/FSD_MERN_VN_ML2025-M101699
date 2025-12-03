function process(choice) {
    // Ensure the input is treated as a whole number
    const selection = parseInt(choice);
    
    // Use a switch statement to handle different cases
    switch (selection) {
        case 1:
            return "Data Pack selected.";
        case 2:
            return "Talktime selected.";
        case 3:
            return "Validity Recharge selected.";
        default:
            // The default case handles any input that doesn't match the above cases
            return "Invalid Choice. Please select 1, 2, or 3.";
    }
}
console.log(process(1));
console.log(process(2));
console.log(process(3));
