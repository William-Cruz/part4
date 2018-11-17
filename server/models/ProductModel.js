const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  name: {
    required: true,
    type: String
  },
  description: {
    type: String
  }
});

module.exports = mongoose.model("Product", schema);
