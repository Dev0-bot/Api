// api/cat.js
export default function handler(req, res) {
    const catImages = [
      { url: "https://cataas.com/cat/cute" },
      { url: "https://cataas.com/cat/techie" },
      { url: "https://cataas.com/cat/motivational" },
    ];
  
    const randomCatImage = catImages[Math.floor(Math.random() * catImages.length)];
  
    res.status(200).json(randomCatImage);
  }
  