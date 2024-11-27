// api/color/random
export default function handler(req, res) {
    // Random colors list
    const colors = [
      { hex: "#FF5733", rgb: "255,87,51", name: "Cinnabar" },
      { hex: "#33FF57", rgb: "51,255,87", name: "Malachite" },
      { hex: "#3357FF", rgb: "51,87,255", name: "Royal Blue" },
      { hex: "#F1C40F", rgb: "241,196,15", name: "Sunflower" },
      { hex: "#9B59B6", rgb: "155,89,182", name: "Amethyst" },
    ];
  
    // Select a random color
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
  
    // Respond with the color details
    res.status(200).json(randomColor);
  }
  