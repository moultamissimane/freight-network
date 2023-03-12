const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ScooterSchema = new Schema({
  name: String,
  longitude: Number,
  latitude: Number,
});

module.exports = mongoose.model("Scooter", ScooterSchema);
