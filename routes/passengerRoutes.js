const express = require('express');
const router = express.Router();
const passengerController = require('../controllers/passengerController');

// Rota para listar todos os passageiros
router.get('/passengers', passengerController.getAllPassengers);

// Rota para buscar um passageiro por ID
router.get('/passengers/:id', passengerController.getPassengerById);

// Rota para criar um novo passageiro
router.post('/passengers', passengerController.createPassenger);

// Rota para atualizar um passageiro por ID
router.put('/passengers/:id', passengerController.updatePassenger);

// Rota para deletar um passageiro por ID
router.delete('/passengers/:id', passengerController.deletePassenger);

module.exports = router;
