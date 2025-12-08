const mongoose = require("mongoose");

const chatSupportSchema = new mongoose.Schema({
  chat_id: { type: Number, required: true, unique: true },
  sender_id: { type: Number, required: true },
  message: { type: String, required: true },
  timestamp: { type: Date, default: Date.now },
  anonymous: { type: Boolean, default: false },
});

module.exports = mongoose.model("ChatSupport", chatSupportSchema);
