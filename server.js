const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(cors());
app.use(express.json());

// Test Route
app.get("/", (req, res) => {
  res.send("API is working!");
});

// API Route to Receive Ingredients and Return Response (POST)
app.post("/get-recipes", (req, res) => {
  const { ingredients } = req.body;

  if (!ingredients || ingredients.length === 0) {
    return res.status(400).json({ message: "Please provide ingredients" });
  }

  // Placeholder response
  res.json({
    message: "Here are some recipes based on your ingredients!",
    ingredientsReceived: ingredients,
  });
});

// Recipe Route - Fetch all recipes (GET)
app.get('/api/recipes', (req, res) => {
  // Placeholder logic to fetch recipes
  res.json([
    { id: 1, name: 'Chicken and Rice' },
    { id: 2, name: 'Beef Stew' },
  ]);
});

// Recipe Route - Create a new recipe (POST)
app.post('/api/recipes', (req, res) => {
  console.log(req.body); // This prints the request body in the terminal
  res.json({ message: "Recipe received", data: req.body });
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

