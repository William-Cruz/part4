const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  body: {
    type: String
  }
});

module.exports = mongoose.model("Comment", schema);
