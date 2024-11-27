export default function handler(req, res) {
    res.status(404).send('<h1>Custom 404 Page</h1><p>Sorry, the page you are looking for does not exist.</p>');
  }
  