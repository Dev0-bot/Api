// api/random-joke.js
export default async function handler(req, res) {
    try {
      const response = await fetch('https://v2.jokeapi.dev/joke/Programming?type=single');
      const data = await response.json();
  
      if (data.joke) {
        res.status(200).json({ joke: data.joke });
      } else {
        res.status(500).json({ message: "Failed to fetch joke" });
      }
    } catch (error) {
      res.status(500).json({ message: "Error fetching joke" });
    }
  }
  