const { MotherPaulistana } = require('../models');

exports.createMotherPaulistana = async (req, res) => {
  try {
    const motherPaulistana = await MotherPaulistana.create(req.body);
    res.status(201).json(motherPaulistana);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getAllMotherPaulistanas = async (req, res) => {
  try {
    const motherPaulistanas = await MotherPaulistana.findAll();
    res.status(200).json(motherPaulistanas);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getMotherPaulistanaById = async (req, res) => {
  try {
    const motherPaulistana = await MotherPaulistana.findByPk(req.params.id);
    if (motherPaulistana) {
      res.status(200).json(motherPaulistana);
    } else {
      res.status(404).json({ error: 'MotherPaulistana not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.updateMotherPaulistana = async (req, res) => {
  try {
    const [updated] = await MotherPaulistana.update(req.body, {
      where: { id: req.params.id }
    });
    if (updated) {
      const updatedMotherPaulistana = await MotherPaulistana.findByPk(req.params.id);
      res.status(200).json(updatedMotherPaulistana);
    } else {
      res.status(404).json({ error: 'MotherPaulistana not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deleteMotherPaulistana = async (req, res) => {
  try {
    const deleted = await MotherPaulistana.destroy({
      where: { id: req.params.id }
    });
    if (deleted) {
      res.status(204).json();
    } else {
      res.status(404).json({ error: 'MotherPaulistana not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
