// routes/passengerRoutes.js
const express = require('express');
const router = express.Router();
const passengerController = require('../controllers/passengerController');

router.post('/passengers', passengerController.createPassenger);
// Repeat for other CRUD routes

module.exports = router;
