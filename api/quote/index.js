// api/quote
export default function handler(req, res) {
    // Quotes grouped by themes
    const quotes = {
      inspirational: [
        "The only limit to our realization of tomorrow is our doubts of today. – Franklin D. Roosevelt",
        "Act as if what you do makes a difference. It does. – William James",
        "Success is not final, failure is not fatal: It is the courage to continue that counts. – Winston Churchill"
      ],
      funny: [
        "Why don’t skeletons fight each other? They don’t have the guts.",
        "I told my computer I needed a break, and now it won’t stop sending me KitKats.",
        "I wondered why the baseball was getting bigger. Then it hit me."
      ],
      programming: [
        "Talk is cheap. Show me the code. – Linus Torvalds",
        "Any fool can write code that a computer can understand. Good programmers write code that humans can understand. – Martin Fowler",
        "Programming is thinking, not typing. – Casey Patton"
      ]
    };
  
    // Get the query parameter for type
    const { type } = req.query;
  
    // If no type is provided, return available themes
    if (!type) {
      return res.status(200).json({
        message: "Available quote themes",
        themes: Object.keys(quotes)
      });
    }
  
    // Validate the requested theme
    if (!quotes[type]) {
      return res.status(400).json({
        error: `Invalid theme. Available themes are: ${Object.keys(quotes).join(", ")}`
      });
    }
  
    // Get a random quote from the specified theme
    const themeQuotes = quotes[type];
    const randomQuote = themeQuotes[Math.floor(Math.random() * themeQuotes.length)];
  
    // Return the quote
    res.status(200).json({
      theme: type,
      quote: randomQuote
    });
  }
  