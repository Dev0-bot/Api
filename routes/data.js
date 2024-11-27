const express = require('express');
const router = express.Router();

// Basic POST endpoint
router.post('/', (req, res) => {
  const { name, age } = req.body;
  res.json({
    message: `Hello, ${name}! You are ${age} years old.`,
  });
});

// PUT endpoint to update data
router.put('/:id', (req, res) => {
  const { id } = req.params;
  const { name, age } = req.body;
  res.json({
    message: `Updated data for ID: ${id}`,
    updated: { name, age },
  });
});

module.exports = router;
