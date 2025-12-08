const express = require("express");
const SafeLocation = require("../models/SafeLocation");
const router = express.Router();

// CREATE
router.post("/", async (req, res) => {
  try {
    const location = await SafeLocation.create(req.body);
    res.status(201).json(location);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// READ all
router.get("/", async (req, res) => {
  const locations = await SafeLocation.find();
  res.json(locations);
});

// READ by ID
router.get("/:id", async (req, res) => {
  const location = await SafeLocation.findOne({ location_id: req.params.id });
  if (!location) return res.status(404).json({ message: "Location not found" });
  res.json(location);
});

// UPDATE
router.put("/:id", async (req, res) => {
  const updated = await SafeLocation.findOneAndUpdate(
    { location_id: req.params.id },
    req.body,
    { new: true }
  );
  res.json(updated);
});

// DELETE
router.delete("/:id", async (req, res) => {
  await SafeLocation.deleteOne({ location_id: req.params.id });
  res.json({ message: "Location deleted" });
});

module.exports = router;
