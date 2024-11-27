// api/dog
import https from "https";

export default function handler(req, res) {
  const dogApiUrl = "https://dog.ceo/api/breeds/image/random";

  // Fetch a random dog image URL from the Dog CEO API
  https.get(dogApiUrl, (dogRes) => {
    let data = "";

    // Collect data chunks
    dogRes.on("data", (chunk) => {
      data += chunk;
    });

    // Once the data is fully received
    dogRes.on("end", () => {
      try {
        const parsedData = JSON.parse(data);

        // Validate the API response
        if (parsedData.status === "success" && parsedData.message) {
          const imageUrl = parsedData.message;

          // Fetch the image and pipe it directly to the client
          https.get(imageUrl, (imageRes) => {
            res.setHeader("Content-Type", imageRes.headers["content-type"]); // Set correct content type
            imageRes.pipe(res); // Stream the image to the client
          }).on("error", (err) => {
            res.status(500).json({ error: "Failed to fetch the dog image.", details: err.message });
          });
        } else {
          res.status(500).json({ error: "Failed to retrieve a valid image URL from Dog CEO API." });
        }
      } catch (err) {
        res.status(500).json({ error: "Error parsing response from Dog CEO API." });
      }
    });
  }).on("error", (err) => {
    res.status(500).json({ error: "Failed to fetch data from Dog CEO API.", details: err.message });
  });
}
