const express = require('express');
const router = express.Router();
const elderlyController = require('../controllers/elderlyController');

router.post('/elderlies', elderlyController.createElderly);
router.get('/elderlies', elderlyController.getAllElderlies);
router.get('/elderlies/:id', elderlyController.getElderlyById);
router.put('/elderlies/:id', elderlyController.updateElderly);
router.delete('/elderlies/:id', elderlyController.deleteElderly);

module.exports = router;
