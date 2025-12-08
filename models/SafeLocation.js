const mongoose = require("mongoose");

const safeLocationSchema = new mongoose.Schema({
  location_id: { type: Number, required: true, unique: true },
  name: { type: String, required: true },
  address: { type: String },
  latitude: { type: Number },
  longitude: { type: Number },
  description: { type: String }
});

module.exports = mongoose.model("SafeLocation", safeLocationSchema);