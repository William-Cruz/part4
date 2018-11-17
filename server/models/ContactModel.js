const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  name: {
    type: String
  },
  occupation: {
    type: String
  },
  avatar: {
    type: String
  }
});

module.exports = mongoose.model("Contact", schema);
