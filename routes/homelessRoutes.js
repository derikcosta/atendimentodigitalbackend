const express = require('express');
const router = express.Router();
const homelessController = require('../controllers/homelessController');

router.post('/homeless', homelessController.createHomeless);
router.get('/homeless', homelessController.getAllHomeless);
router.get('/homeless/:id', homelessController.getHomelessById);
router.put('/homeless/:id', homelessController.updateHomeless);
router.delete('/homeless/:id', homelessController.deleteHomeless);

module.exports = router;
