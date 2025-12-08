const express = require("express");
const Helpline = require("../models/Helpline");
const router = express.Router();

// CREATE
router.post("/", async (req, res) => {
  try {
    const helpline = await Helpline.create(req.body);
    res.status(201).json(helpline);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// READ all
router.get("/", async (req, res) => {
  const helplines = await Helpline.find();
  res.json(helplines);
});

// READ by ID
router.get("/:id", async (req, res) => {
  const helpline = await Helpline.findOne({ helpline_id: req.params.id });
  if (!helpline) return res.status(404).json({ message: "Helpline not found" });
  res.json(helpline);
});

// UPDATE
router.put("/:id", async (req, res) => {
  const updated = await Helpline.findOneAndUpdate(
    { helpline_id: req.params.id },
    req.body,
    { new: true }
  );
  res.json(updated);
});

// DELETE
router.delete("/:id", async (req, res) => {
  await Helpline.deleteOne({ helpline_id: req.params.id });
  res.json({ message: "Helpline deleted" });
});

module.exports = router;
