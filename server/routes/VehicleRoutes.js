const express = require("express");
const router = express.Router();

const {
    list,
    show,
    create,
    update,
    remove
} = require("../controllers/VehicleController");


router.get("/vehicles", list);
router.get("/vehicles/:id", show);
router.post("/vehicles", create);
router.put("/vehicles/:id", update);
router.delete("/vehicles/:id", remove);


module.exports = router;
