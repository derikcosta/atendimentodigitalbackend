const { PCD } = require('../models');

exports.createPCD = async (req, res) => {
  try {
    const pcd = await PCD.create(req.body);
    res.status(201).json(pcd);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getAllPCDs = async (req, res) => {
  try {
    const pcds = await PCD.findAll();
    res.status(200).json(pcds);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getPCDById = async (req, res) => {
  try {
    const pcd = await PCD.findByPk(req.params.id);
    if (pcd) {
      res.status(200).json(pcd);
    } else {
      res.status(404).json({ error: 'PCD not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.updatePCD = async (req, res) => {
  try {
    const [updated] = await PCD.update(req.body, {
      where: { id: req.params.id }
    });
    if (updated) {
      const updatedPCD = await PCD.findByPk(req.params.id);
      res.status(200).json(updatedPCD);
    } else {
      res.status(404).json({ error: 'PCD not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deletePCD = async (req, res) => {
  try {
    const deleted = await PCD.destroy({
      where: { id: req.params.id }
    });
    if (deleted) {
      res.status(204).json();
    } else {
      res.status(404).json({ error: 'PCD not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
