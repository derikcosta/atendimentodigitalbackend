const { Elderly } = require('../models');

exports.createElderly = async (req, res) => {
  try {
    const elderly = await Elderly.create(req.body);
    res.status(201).json(elderly);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getAllElderlies = async (req, res) => {
  try {
    const elderlies = await Elderly.findAll();
    res.status(200).json(elderlies);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getElderlyById = async (req, res) => {
  try {
    const elderly = await Elderly.findByPk(req.params.id);
    if (elderly) {
      res.status(200).json(elderly);
    } else {
      res.status(404).json({ error: 'Elderly not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.updateElderly = async (req, res) => {
  try {
    const [updated] = await Elderly.update(req.body, {
      where: { id: req.params.id }
    });
    if (updated) {
      const updatedElderly = await Elderly.findByPk(req.params.id);
      res.status(200).json(updatedElderly);
    } else {
      res.status(404).json({ error: 'Elderly not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deleteElderly = async (req, res) => {
  try {
    const deleted = await Elderly.destroy({
      where: { id: req.params.id }
    });
    if (deleted) {
      res.status(204).json();
    } else {
      res.status(404).json({ error: 'Elderly not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
