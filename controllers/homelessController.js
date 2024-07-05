const { Homeless } = require('../models');

exports.createHomeless = async (req, res) => {
  try {
    const homeless = await Homeless.create(req.body);
    res.status(201).json(homeless);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getAllHomeless = async (req, res) => {
  try {
    const homeless = await Homeless.findAll();
    res.status(200).json(homeless);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getHomelessById = async (req, res) => {
  try {
    const homeless = await Homeless.findByPk(req.params.id);
    if (homeless) {
      res.status(200).json(homeless);
    } else {
      res.status(404).json({ error: 'Homeless not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.updateHomeless = async (req, res) => {
  try {
    const [updated] = await Homeless.update(req.body, {
      where: { id: req.params.id }
    });
    if (updated) {
      const updatedHomeless = await Homeless.findByPk(req.params.id);
      res.status(200).json(updatedHomeless);
    } else {
      res.status(404).json({ error: 'Homeless not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deleteHomeless = async (req, res) => {
  try {
    const deleted = await Homeless.destroy({
      where: { id: req.params.id }
    });
    if (deleted) {
      res.status(204).json();
    } else {
      res.status(404).json({ error: 'Homeless not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
