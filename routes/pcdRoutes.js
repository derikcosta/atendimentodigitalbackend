const express = require('express');
const router = express.Router();
const pcdController = require('../controllers/pcdController');

router.post('/pcds', pcdController.createPCD);
router.get('/pcds', pcdController.getAllPCDs);
router.get('/pcds/:id', pcdController.getPCDById);
router.put('/pcds/:id', pcdController.updatePCD);
router.delete('/pcds/:id', pcdController.deletePCD);

module.exports = router;
