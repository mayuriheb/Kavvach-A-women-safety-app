const express = require("express");
const ChatSupport = require("../models/ChatSupport");
const router = express.Router();

// CREATE
router.post("/", async (req, res) => {
  try {
    const chat = await ChatSupport.create(req.body);
    res.status(201).json(chat);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// READ all
router.get("/", async (req, res) => {
  const chats = await ChatSupport.find();
  res.json(chats);
});

// READ by ID
router.get("/:id", async (req, res) => {
  const chat = await ChatSupport.findOne({ chat_id: req.params.id });
  if (!chat) return res.status(404).json({ message: "Chat not found" });
  res.json(chat);
});

// UPDATE
router.put("/:id", async (req, res) => {
  const updated = await ChatSupport.findOneAndUpdate(
    { chat_id: req.params.id },
    req.body,
    { new: true }
  );
  res.json(updated);
});

// DELETE
router.delete("/:id", async (req, res) => {
  await ChatSupport.deleteOne({ chat_id: req.params.id });
  res.json({ message: "Chat deleted" });
});

module.exports = router;
