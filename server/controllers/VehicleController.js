const VehicleModel = require("../models/VehicleModel");

module.exports.list = (req, res) => {
  VehicleModel.find({}).exec().then((vehicles) => {
    return res.json(vehicles);
  });
};

module.exports.show = (req, res) => {
  VehicleModel.findById(req.params.id).exec().then((vehicle) => {
    return res.json(vehicle);
  });
};

module.exports.create = (req, res) => {
  const v = new VehicleModel({
    year: req.body.year,
    make: req.body.make,
    model: req.body.model
  });
  v.save().then(savedVehicle => {
    return res.json(savedVehicle);
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
