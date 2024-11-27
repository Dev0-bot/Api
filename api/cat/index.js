// api/cat
import https from "https";

export default function handler(req, res) {
  const catUrl = "https://cataas.com/cat";

  // Make a request to the Cataas API
  https.get(catUrl, (catRes) => {
    const { statusCode } = catRes;

    // Check if the request was successful
    if (statusCode !== 200) {
      res.status(statusCode).json({ error: "Failed to fetch cat image" });
      return;
    }

    // Set content-type for the response
    res.setHeader("Content-Type", catRes.headers["content-type"]);

    // Pipe the image stream directly to the client
    catRes.pipe(res);
  }).on("error", (err) => {
    res.status(500).json({ error: "Failed to fetch cat image", details: err.message });
  });
}
