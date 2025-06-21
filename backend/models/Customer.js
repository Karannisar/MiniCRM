const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  name: String,
  email: String,
  phone: String,
  status: { type: String, enum: ["Lead", "Contacted", "Converted"], default: "Lead" }
});

module.exports = mongoose.model("Customer", customerSchema);
