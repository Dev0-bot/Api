// api/color/[hex]
import fetch from 'node-fetch';

export default async function handler(req, res) {
  const { hex } = req.query;

  // Validate the hex format
  if (!/^([0-9A-F]{6})$/i.test(hex)) {
    return res.status(400).json({ error: "Invalid hex color format. Please use a 6-digit hex code." });
  }

  const color = `#${hex}`;

  const colorData = {
    hex: color,
    rgb: hexToRgb(hex),
    name: getColorName(hex),
    preview: `https://singlecolorimage.com/get/${hex}/200x200`, // Generate a preview image
  };

  res.status(200).json(colorData);
}

// Convert hex to RGB
function hexToRgb(hex) {
  const r = parseInt(hex.substr(0, 2), 16);
  const g = parseInt(hex.substr(2, 2), 16);
  const b = parseInt(hex.substr(4, 2), 16);
  return { r, g, b };
}

function getColorName(hex) {
  const colorNames = {
    'ffffff': 'White',
    '000000': 'Black',
    'ff0000': 'Red',
    '00ff00': 'Green',
    '0000ff': 'Blue',
    'ffff00': 'Yellow',
  };

  return colorNames[hex] || 'Unknown Color';
}
