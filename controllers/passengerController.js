const { Passenger } = require('../models');

//Controlador para listar todos os passageiros
exports.getAllPassengers = async (req, res) => {
  try {
    console.log('Buscando todos os passageiros...');
    const passengers = await Passenger.findAll();
    console.log('Passageiros encontrados:', passengers);
    res.status(200).json(passengers);

    // const passengers = [
    //   { id: 1, name: 'John Doe', email: 'john@example.com' },
    //   { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
    // ];
  
    // res.status(200).json(passengers);

    // module.exports = {
    //   getAllPassengers
    // };
  
  } catch (error) {
    console.error('Erro ao buscar passageiros:', error);
    res.status(500).json({ message: error.message });
  }
};



// Controlador para buscar um passageiro por ID
exports.getPassengerById = async (req, res) => {
  const id = req.params.id;
  try {
    const passenger = await Passenger.findByPk(id);
    if (!passenger) {
      res.status(404).json({ message: 'Passenger not found' });
    } else {
      res.status(200).json(passenger);
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Controlador para criar um novo passageiro
exports.createPassenger = async (req, res) => {
  const { name, email, cpf, rg, birth_date, gender, social_name } = req.body;
  try {
    const newPassenger = await Passenger.create({
      name,
      email,
      cpf,
      rg,
      birth_date,
      gender,
      social_name
    });
    res.status(201).json(newPassenger);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Controlador para atualizar um passageiro por ID
exports.updatePassenger = async (req, res) => {
  const id = req.params.id;
  const { name, email, cpf, rg, birth_date, gender, social_name } = req.body;
  try {
    const passenger = await Passenger.findByPk(id);
    if (!passenger) {
      res.status(404).json({ message: 'Passenger not found' });
    } else {
      await passenger.update({
        name,
        email,
        cpf,
        rg,
        birth_date,
        gender,
        social_name
      });
      res.status(200).json(passenger);
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Controlador para deletar um passageiro por ID
exports.deletePassenger = async (req, res) => {
  const id = req.params.id;
  try {
    const passenger = await Passenger.findByPk(id);
    if (!passenger) {
      res.status(404).json({ message: 'Passenger not found' });
    } else {
      await passenger.destroy();
      res.status(204).send();
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};