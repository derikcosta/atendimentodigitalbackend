const express = require('express');
const router = express.Router();
const motherPaulistanaController = require('../controllers/motherPaulistanaController');

router.post('/motherpaulistanas', motherPaulistanaController.createMotherPaulistana);
router.get('/motherpaulistanas', motherPaulistanaController.getAllMotherPaulistanas);
router.get('/motherpaulistanas/:id', motherPaulistanaController.getMotherPaulistanaById);
router.put('/motherpaulistanas/:id', motherPaulistanaController.updateMotherPaulistana);
router.delete('/motherpaulistanas/:id', motherPaulistanaController.deleteMotherPaulistana);

module.exports = router;
