// api/quote.js
export default function handler(req, res) {
    const quotes = [
      { author: "Albert Einstein", quote: "Life is like riding a bicycle. To keep your balance, you must keep moving." },
      { author: "Oscar Wilde", quote: "Be yourself; everyone else is already taken." },
      { author: "Mahatma Gandhi", quote: "Be the change that you wish to see in the world." },
    ];
  
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  
    res.status(200).json(randomQuote);
  }
  