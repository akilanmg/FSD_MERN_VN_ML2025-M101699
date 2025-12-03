function getBusRoute(busNumber) {
    // Ensure the input is treated as a whole number
    const number = parseInt(busNumber);

    // Use the modulo operator (%) to find the remainder when divided by 2
    if (number % 2 === 0) {
        return "Route A (Even)";
    } else {
        return "Route B (Odd)";
    }
}
console.log(getBusRoute(10)); 
console.log(getBusRoute(15))