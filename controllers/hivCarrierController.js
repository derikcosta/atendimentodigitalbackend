const { HIVCarrier } = require('../models');

exports.createHIVCarrier = async (req, res) => {
  try {
    const hivCarrier = await HIVCarrier.create(req.body);
    res.status(201).json(hivCarrier);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getAllHIVCarriers = async (req, res) => {
  try {
    const hivCarriers = await HIVCarrier.findAll();
    res.status(200).json(hivCarriers);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getHIVCarrierById = async (req, res) => {
  try {
    const hivCarrier = await HIVCarrier.findByPk(req.params.id);
    if (hivCarrier) {
      res.status(200).json(hivCarrier);
    } else {
      res.status(404).json({ error: 'HIVCarrier not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.updateHIVCarrier = async (req, res) => {
  try {
    const [updated] = await HIVCarrier.update(req.body, {
      where: { id: req.params.id }
    });
    if (updated) {
      const updatedHIVCarrier = await HIVCarrier.findByPk(req.params.id);
      res.status(200).json(updatedHIVCarrier);
    } else {
      res.status(404).json({ error: 'HIVCarrier not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deleteHIVCarrier = async (req, res) => {
  try {
    const deleted = await HIVCarrier.destroy({
      where: { id: req.params.id }
    });
    if (deleted) {
      res.status(204).json();
    } else {
      res.status(404).json({ error: 'HIVCarrier not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
