import { createCanvas } from 'canvas';

export default function handler(req, res) {
  const { hex } = req.query;

  // Validate the hex format (6-digit hexadecimal color code)
  if (!/^([0-9A-F]{6})$/i.test(hex)) {
    return res.status(400).json({ error: "Invalid hex color format. Please use a 6-digit hex code." });
  }

  // Create a canvas of 200x200 pixels
  const width = 200;
  const height = 200;
  const canvas = createCanvas(width, height);
  const ctx = canvas.getContext('2d');

  // Set the background color to the provided hex code
  ctx.fillStyle = `#${hex}`;
  ctx.fillRect(0, 0, width, height);

  // Set the response header for content type as an image (PNG)
  res.setHeader('Content-Type', 'image/png');

  // Return the image buffer in PNG format
  canvas.createPNGStream().pipe(res);
}
