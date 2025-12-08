const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const chatRoutes = require("./routes/chatRoutes");
const helplineRoutes = require("./routes/helplineRoutes");
const locationRoutes = require("./routes/locationRoutes");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// MongoDB Connection
mongoose.connect("mongodb://127.0.0.1:27017/safetyAppDB")
  .then(() => console.log("✅ MongoDB connected"))
  .catch(err => console.error(err));

// Routes
app.use("/api/chats", chatRoutes);
app.use("/api/helplines", helplineRoutes);
app.use("/api/locations", locationRoutes);

// Server start
app.listen(5000, () => console.log("🚀 Server running on port 5000"));
