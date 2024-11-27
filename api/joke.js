// api/joke.js
export default function handler(req, res) {
    const jokes = [
      { joke: "Why don't skeletons fight each other? They don't have the guts." },
      { joke: "I told my wife she was drawing her eyebrows too high. She looked surprised." },
      { joke: "What do you call fake spaghetti? An impasta!" },
    ];
  
    const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
  
    res.status(200).json(randomJoke);
  }
  