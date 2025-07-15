const express = require("express");
const path = require("path");
const app = express();

app.use(express.static(path.join(__dirname, "public")));

// Hardcoded discussion topics endpoint
app.get("/api/topics", (req, res) => {
  res.json({
    topics: [
      "Future of AI in Education",
      "Cybersecurity in 2025",
      "Is Web3 still relevant?",
      "Can LLMs replace developers?"
    ]
  });
});

module.exports = app;
