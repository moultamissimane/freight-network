const Scooter = require("../Models/ScooterModel");

// create a new scooter

const createScooter = async (req, res) => {
  const { name, image, longitude, latitude, isAvailable } = req.body;

  const newScooter = new Scooter({
    name,
    image,
    longitude,
    latitude,
    isAvailable,
  });

  try {
    const savedScooter = await newScooter.save();
    res.status(200).json(savedScooter);
  } catch (err) {
    res.status(500).json(err);
  }
};

// get all scooters

const getAllScooters = async (req, res) => {
  try {
    const scooters = await Scooter.find();
    res.status(200).json(scooters);
  } catch (err) {
    res.status(500).json(err);
  }
};

// get scooter by id

const getScooterById = async (req, res) => {
  try {
    const scooter = await Scooter.findById(req.params.id);
    res.status(200).json(scooter);
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = {
  createScooter,
  getAllScooters,
  getScooterById,
};
