const ContactModel = require("../models/ContactModel");

module.exports.list = (req, res) => {
  ContactModel.find({}).exec().then((contacts) => {
    return res.json(contacts);
  });
};

module.exports.show = (req, res) => {
  ContactModel.findById(req.params.id).exec().then((contact) => {
    return res.json(contact);
  });
};

module.exports.create = (req, res) => {
  const newContact = new ContactModel({
    name: req.body.name,
    occupation: req.body.occupation,
    avatar: req.body.avatar
  });
  newContact.save().then(savedContact => {
    return res.json(savedContact);
  });
};

module.exports.update = function update(req, res) {
  return res.json({
    theId: req.params.id
  });
};

module.exports.remove = function remove(req, res) {
  return res.json({});
};
