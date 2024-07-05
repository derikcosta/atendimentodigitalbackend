// controllers/passengerController.js
const { Passenger, Student, PCD, Elderly, MotherPaulistana, HIVCarrier, Homeless } = require('../models');

exports.createPassenger = async (req, res) => {
  try {
    const passenger = await Passenger.create(req.body);
    res.status(201).json(passenger);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Repeat similar functions for each type-specific creation and CRUD operations
