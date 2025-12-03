function cleanString(inputString) {
    if (typeof inputString !== 'string') {
        // Handle non-string input gracefully
        return "Input must be a string.";
    }
    // The trim() method removes whitespace from both ends of a string.
    return inputString.trim();
}
function deepCleanString(inputString) {
    if (typeof inputString !== 'string') {
        return "Input must be a string.";
    }
    // 1. trim() removes leading/trailing spaces.
    // 2. replace(/\s+/g, ' ') replaces one or more whitespace characters with a single space.
    return inputString.trim().replace(/\s+/g, ' ');
}