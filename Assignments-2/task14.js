function getFirstTwoAppNames() {
    // The source array of applications
    const apps = ["Instagram", "YouTube", "LinkedIn"];
    
    // 1. Use array destructuring to assign the first two elements to variables.
    // The commas skip elements you don't want (we don't need a comma here 
    // because we only care about the first two elements).
    const [app1, app2] = apps;

    // 2. Format and return the result
    return `The first two apps are: ${app1} and ${app2}`;
}
console.log(getFirstTwoAppNames())