// api/dog.js
export default function handler(req, res) {
    const dogImages = [
      { url: "https://random.dog/0f063dbb-0c13-472e-9c9e-07fbb7062b3b.jpg" },
      { url: "https://random.dog/7c2a18db-07ff-45e9-bfc9-09a47416b1c2.jpg" },
      { url: "https://random.dog/a1942335-fce9-4007-b3cf-3b53a4f4609c.jpg" },
    ];
  
    const randomDogImage = dogImages[Math.floor(Math.random() * dogImages.length)];
  
    res.status(200).json(randomDogImage);
  }
  