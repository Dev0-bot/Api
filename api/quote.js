export default (req, res) => {
    const quotes = [
      "The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela",
      "The way to get started is to quit talking and begin doing. - Walt Disney",
      "Your time is limited, so don’t waste it living someone else’s life. - Steve Jobs",
    ];
    const randomIndex = Math.floor(Math.random() * quotes.length);
    res.json({ quote: quotes[randomIndex] });
  };
  