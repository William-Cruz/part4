const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

mongoose.promise = global.promise;
// mongoose.Promise = require("bluebird'");
// assert.equal(query.exec().constructor, require("bluebird"));
mongoose.connect("mongodb://DB_1:juan_23@ds163683.mlab.com:63683/express_node", 
{useMongoClient: true,}
);
const db = mongoose.connection;
// db.on("error", console.error.bind(console, "connection error:"));
// db.once("open", function () {
//   // we're connected!
// });
db.on("error", console.error.bind(console, "connection-error:"));
db.once("open", () => console.log("Connected to DB"));


// const comments = require("./comments");
// const products = require("./products");
// const vehicles = require("./vehicles");
// const contacts = require("./contacts");

const CommentRoutes = require("./routes/CommentRoutes");
const ContactRoutes = require("./routes/ContactRoutes");
const ProductRoutes = require("./routes/ProductRoutes");
const VehicleRoutes = require("./routes/VehicleRoutes");

const app = express();

app.use(bodyParser.json());
app.use(CommentRoutes);
app.use(ContactRoutes);
app.use(ProductRoutes);
app.use(VehicleRoutes);

const port = process.env.PORT || 3003;
app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
