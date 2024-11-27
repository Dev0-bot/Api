// api/emoji/[emojiName]
export default function handler(req, res) {
    const { emojiName } = req.query;
  
    // Validate emoji name
    if (!emojiName || !/^[a-zA-Z0-9_]+$/.test(emojiName)) {
      return res.status(400).json({ error: "Invalid emoji name." });
    }
  
    // Construct the Discord CDN URL for the emoji
    const emojiUrl = `https://cdn.discordapp.com/emojis/${emojiName}.png`;
  
    // Return the emoji URL
    res.status(200).json({
      name: emojiName,
      url: emojiUrl,
    });
  }
  