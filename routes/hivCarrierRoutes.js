const express = require('express');
const router = express.Router();
const hivCarrierController = require('../controllers/hivCarrierController');

router.post('/hivcarriers', hivCarrierController.createHIVCarrier);
router.get('/hivcarriers', hivCarrierController.getAllHIVCarriers);
router.get('/hivcarriers/:id', hivCarrierController.getHIVCarrierById);
router.put('/hivcarriers/:id', hivCarrierController.updateHIVCarrier);
router.delete('/hivcarriers/:id', hivCarrierController.deleteHIVCarrier);

module.exports = router;
