// api/index.js
import fs from "fs";
import path from "path";

export default function handler(req, res) {
  // Resolve the path to the index.json file
  const filePath = path.resolve(process.cwd(), "index.json");

  // Read the JSON file
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      // Handle file read errors
      console.error("Failed to read index.json:", err);
      return res.status(500).json({ error: "Failed to load the API index." });
    }

    // Parse and return the JSON content
    try {
      const jsonData = JSON.parse(data);
      res.status(200).json(jsonData);
    } catch (parseError) {
      console.error("Failed to parse index.json:", parseError);
      res.status(500).json({ error: "Invalid JSON format in index.json." });
    }
  });
}
