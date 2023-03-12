const router = require("express").Router();
const {createScooter, getAllScooters, getScooterById} = require("../controllers/ScooterController");

router.post("/create-scooter", createScooter);
router.get("/scooters", getAllScooters);
router.get("/scooter/:id", getScooterById);

module.exports = router;

