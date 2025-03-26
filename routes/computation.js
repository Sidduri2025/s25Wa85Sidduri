const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    let x = Math.random() * 100; // Generate a random x value
    let y = Math.random() * 100; // Generate a random y value

    // Check if query parameters 'x' and 'y' are provided
    if (req.query.x) {
        x = parseFloat(req.query.x);
        if (isNaN(x)) {
            return res.status(400).send("Invalid number provided for x.");
        }
    }

    if (req.query.y) {
        y = parseFloat(req.query.y);
        if (isNaN(y)) {
            return res.status(400).send("Invalid number provided for y.");
        }
    }

    const result = Math.atan2(y, x);
    res.send(`atan2 applied to (y: ${y}, x: ${x}) is ${result}`);
});

module.exports = router;
