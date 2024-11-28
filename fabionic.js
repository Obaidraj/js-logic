function generateFibonacci(terms) {
    if (terms <= 0) {
        return []; // Return an empty array for non-positive terms
    }
    if (terms === 1) {
        return [0]; // Return [0] if only one term is required
    }

    const fibonacci = [0, 1]; // Initialize the sequence with the first two terms

    // Generate the sequence up to the specified number of terms
    for (let i = 2; i < terms; i++) {
        fibonacci.push(fibonacci[i - 1] + fibonacci[i - 2]);
    }

    return fibonacci;
}

// Example usage
const numTerms = 3;
const sequence = generateFibonacci(numTerms);
console.log(`Fibonacci sequence up to ${numTerms} terms:`, sequence);
