const ProductModel = require("../models/ProductModel");

module.exports.list = (req, res) => {
  ProductModel.find({}).exec().then((products) => {
    return res.json(products);
  });
};

module.exports.show = (req, res) => {
  ProductModel.findById(req.params.id).exec().then((product) => {
    return res.json(product);
  });
};

module.exports.create = (req, res) => {
  const p = new ProductModel({
    name: req.body.name,
    description: req.body.description
  });
  p.save().then(savedProduct => {
    return res.json(savedProduct);
  });
};

module.exports.update = (req, res) => {
  return res.json({
    theId: req.params.id
  });
};

module.exports.remove = (req, res) => {
  return res.json({});
};
