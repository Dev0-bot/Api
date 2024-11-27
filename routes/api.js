const express = require('express');
const router = express.Router();

// Basic GET endpoint
router.get('/', (req, res) => {
  res.json({ message: 'Welcome to the JSON API!' });
});

module.exports = router;
