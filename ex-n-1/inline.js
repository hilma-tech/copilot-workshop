/**
 * Calculates the sum of all positive numbers in an array.
 * @param {number[]} numbers - The array of numbers to process.
 * @returns {number} - The sum of all positive numbers.
 */
function sumPositiveNumbers(numbers) {
    if (!Array.isArray(numbers)) {
        throw new Error("Input must be an array");
    }
    // Focus on this line: Filtering positive numbers before summing them
    return numbers.reduce((sum, num) => num > 0 ? sum + num : sum, 0);
}

// Example usage:
const input = [-1, 2, -3, 4, 5];
console.log(sumPositiveNumbers(input)); // Output: 11
