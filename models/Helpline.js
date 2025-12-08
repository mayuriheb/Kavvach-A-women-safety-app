const mongoose = require("mongoose");

const helplineSchema = new mongoose.Schema({
  helpline_id: { type: Number, required: true, unique: true },
  category: { type: String, required: true },
  helpline_number: { type: String, required: true },
  description: { type: String },
  availability: { type: String }
});

module.exports = mongoose.model("Helpline", helplineSchema);