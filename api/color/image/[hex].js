// api/color/image/[hex]
export default async function handler(req, res) {
  try {
    const { hex } = req.query;

    // Validate and clean the hex color
    const cleanHex = validateAndCleanHex(hex);

    // Convert hex to RGB
    const { r, g, b } = hexToRgb(cleanHex);

    // Create a canvas of 200x200 pixels
    const canvas = createCanvas(200, 200);
    const ctx = canvas.getContext('2d');

    // Fill the entire canvas with the specified color
    ctx.fillStyle = `rgb(${r}, ${g}, ${b})`;
    ctx.fillRect(0, 0, 200, 200);

    // Convert canvas to buffer
    const buffer = canvas.toBuffer('image/png');

    // Set response headers
    res.setHeader('Content-Type', 'image/png');
    res.setHeader('Cache-Control', 'public, max-age=3600');

    // Send the image buffer
    res.status(200).send(buffer);
  } catch (error) {
    console.error('Error generating color image:', error);
    res.status(400).json({ 
      error: error.message || "Invalid color format" 
    });
  }
}

// Validate and clean hex color
function validateAndCleanHex(hex) {
  if (!hex) {
    throw new Error('No hex color provided');
  }

  // Remove # if present and convert to uppercase
  let cleanedHex = hex.replace(/^#/, '').toUpperCase();

  // Validate hex format (exactly 6 characters, only 0-9 and A-F)
  if (!/^[0-9A-F]{6}$/.test(cleanedHex)) {
    throw new Error('Invalid hex color format. Use 6-digit hex code.');
  }

  return cleanedHex;
}

// Convert hex to RGB function
function hexToRgb(hex) {
  const r = parseInt(hex.substr(0, 2), 16);
  const g = parseInt(hex.substr(2, 2), 16);
  const b = parseInt(hex.substr(4, 2), 16);
  
  return { r, g, b };
}