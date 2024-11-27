// api/joke
export default function handler(req, res) {
    // Predefined list of jokes
    const jokes = [
      "Why don't skeletons fight each other? They don't have the guts.",
      "What do you call fake spaghetti? An impasta.",
      "Why did the scarecrow win an award? Because he was outstanding in his field.",
      "Why do seagulls fly over the ocean? Because if they flew over the bay, they’d be bagels.",
      "Why don't scientists trust atoms? Because they make up everything!",
      "hy don't skeletons fight each other? They don't have the guts.",
      "I told my wife she was drawing her eyebrows too high. She looked surprised.",
      "What do you call fake spaghetti? An impasta!"
    ];
  
    // Select a random joke
    const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
  
    // Respond with the joke
    res.status(200).json({ joke: randomJoke });
  }
  