export default (req, res) => {
  res.json({
    message: "Welcome to the JSON API!",
    endpoints: [
      { path: "/api/quote", description: "Returns a random quote" },
      { path: "/api/data", description: "Handles data-related requests" },
    ],
  });
};
