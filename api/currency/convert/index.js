// api/currency/convert
import https from "https";

// Ensure dotenv is loaded to access environment variables
require('dotenv').config();

export default function handler(req, res) {
  const { amount, from, to } = req.query;

  // Validate query parameters
  if (!amount || isNaN(amount) || !from || !to) {
    return res.status(400).json({
      error: "Invalid query parameters. Please provide 'amount', 'from', and 'to'.",
    });
  }

  // Get the API key from the environment variable
  const apiKey = process.env.CURRENCY_API_KEY;
  
  if (!apiKey) {
    return res.status(500).json({
      error: "API key is missing. Please ensure you have set the CURRENCY_API_KEY in your .env file.",
    });
  }

  // Use the currency conversion API (with the API key, if needed)
  const apiUrl = `https://api.exchangerate.host/convert?from=${from}&to=${to}&amount=${amount}&apikey=${apiKey}`;

  // Fetch exchange rate and perform conversion
  https.get(apiUrl, (apiRes) => {
    let data = "";

    // Collect data chunks
    apiRes.on("data", (chunk) => {
      data += chunk;
    });

    // Once all data is received
    apiRes.on("end", () => {
      try {
        const parsedData = JSON.parse(data);

        // Check for success in the API response
        if (parsedData.success && parsedData.result != null) {
          res.status(200).json({
            amount: parseFloat(amount),
            from: from.toUpperCase(),
            to: to.toUpperCase(),
            result: parsedData.result,
          });
        } else {
          res.status(500).json({
            error: "Failed to perform currency conversion.",
            details: parsedData.error || "Unknown error from the exchange rate API.",
          });
        }
      } catch (err) {
        res.status(500).json({ error: "Failed to parse exchange rate API response." });
      }
    });
  }).on("error", (err) => {
    res.status(500).json({
      error: "Failed to fetch data from the exchange rate API.",
      details: err.message,
    });
  });
}
