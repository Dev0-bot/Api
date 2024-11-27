const express = require('express');
const router = express.Router();

// Info metadata
const apiWrappers = [
  {
    Info: "Try using a wrapper :3",
    NodeJS:	"WIP",
    Python:	"WIP"
  },
];

// Endpoint metadata
const apiEndpoints = [
"GET /achievement?text=text[&icon=int]",
"GET /birb",
"GET /calling?text=text",
"GET /captcha?text=text",
"GET /cats",
"GET /challenge?text=text[&icon=int]",
"GET /color/<hex>",
"GET /color/image/<hex>",
"GET /color/image/gradient/<hex>",
"GET /colour/<hex>",
"GET /colour/image/<hex>",
"GET /colour/image/gradient/<hex>",
"GET /didyoumean?top=text&bottom=text",
"GET /dogs",
"GET /drake?top=text&bottom=text",
"GET /facts?text=text",
"GET /nft",
"GET /nft/<hex>",
"GET /nft/<hex>/<season>",
"GET /pornhub?text=text&text2=text",
"GET /quote",
"GET /sadcat",
"GET /scroll?text=text",
"GET /sillycat",
"GET /sillycat/<hex_right>",
"GET /sillycat/<hex_right>/<hex_left>",
"GET /supreme?text=str",
];

// Root endpoint that lists all available API endpoints
router.get('/', (req, res) => {
  res.json({
    message: 'Welcome to Dev0s JSON API!',
    endpoints: apiWrappers,
    Warappers: apiEndpoints,
  });
});

module.exports = router;
