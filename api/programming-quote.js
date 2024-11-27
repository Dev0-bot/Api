// api/programming-quote.js
export default function handler(req, res) {
    const programmingQuotes = [
      { author: "Linus Torvalds", quote: "Talk is cheap. Show me the code." },
      { author: "Steve Jobs", quote: "Everybody in this country should learn how to program a computer... because it teaches you how to think." },
      { author: "Donald Knuth", quote: "Programs are meant to be read by humans and only incidentally for computers to execute." },
    ];
  
    const randomProgrammingQuote = programmingQuotes[Math.floor(Math.random() * programmingQuotes.length)];
  
    res.status(200).json(randomProgrammingQuote);
  }
  