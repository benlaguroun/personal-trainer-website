const express = require("express");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const app = express();
app.use(bodyParser.json());

// Fake user database
const users = [];
const SECRET_KEY = "your_secret_key";

// Sign up endpoint
app.post("/signup", (req, res) => {
  const { email, password } = req.body;
  const hashedPassword = bcrypt.hashSync(password, 8);
  users.push({ email, password: hashedPassword });
  res.status(200).send("User registered successfully!");
});

// Login endpoint
app.post("/login", (req, res) => {
  const { email, password } = req.body;
  const user = users.find((u) => u.email === email);
  if (user && bcrypt.compareSync(password, user.password)) {
    const token = jwt.sign({ email }, SECRET_KEY, { expiresIn: "1h" });
    res.status(200).json({ token });
  } else {
    res.status(401).send("Invalid credentials");
  }
});

// Middleware to protect routes
const authenticateToken = (req, res, next) => {
  const token = req.headers["authorization"];
  if (!token) return res.status(401).send("Access denied");
  jwt.verify(token, SECRET_KEY, (err, user) => {
    if (err) return res.status(403).send("Invalid token");
    req.user = user;
    next();
  });
};

// Protected feed route
app.get("/feed", authenticateToken, (req, res) => {
  res.status(200).send("Welcome to the feed!");
});

app.listen(3000, () => console.log("Server running on port 3000"));
