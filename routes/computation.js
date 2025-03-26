const express = require('express');
const router = express.Router();

// Define a set of Math functions
const mathFunctions = [
    Math.sin, Math.cos, Math.tan, Math.log, Math.exp,
    Math.sqrt, Math.abs, Math.ceil, Math.floor, Math.round
];

// Get the last digit of your student ID (replace with your actual last digit)
const lastDigit = 5;  // Example: If your ID is 12345, use 5

const selectedFunction = mathFunctions[lastDigit] || Math.sqrt; // Default to sqrt if out of range

router.get('/', (req, res) => {
    let x = Math.random() * 100; // Generate a random value

    // Check if query parameter 'x' is provided
    if (req.query.x) {
        x = parseFloat(req.query.x);
        if (isNaN(x)) {
            return res.status(400).send("Invalid number provided for x.");
        }
    }

    const y = selectedFunction(x);
    res.send(`${selectedFunction.name} applied to ${x} is ${y}`);
});

module.exports = router;
