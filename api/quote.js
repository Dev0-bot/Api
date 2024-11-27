export default function handler(req, res) {
    const quotes = [
      "The best way to predict the future is to create it.",
      "Do what you can, with what you have, where you are.",
      "In the middle of every difficulty lies opportunity.",
      "Success is not final, failure is not fatal: It is the courage to continue that counts."
    ];
  
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  
    res.status(200).json({ quote: randomQuote });
  }
  