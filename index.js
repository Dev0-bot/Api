const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON request bodies
app.use(express.json());

// Import and use routes
const rootRoutes = require('./routes/root');
const apiRoutes = require('./routes/api');
const dataRoutes = require('./routes/data');
const quoteRoute = require('./routes/quotes'); // Rename if needed

app.use('/', rootRoutes);
app.use('/api', apiRoutes);
app.use('/api/data', dataRoutes);
app.use('/api/quote', quoteRoute); // Mount at /api/quote

// Start the server
app.listen(port, () => {
  console.log(`API is running at http://localhost:${port}`);
});
