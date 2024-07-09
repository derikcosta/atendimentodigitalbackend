// const express = require('express');
// const jwt = require('jsonwebtoken');
// const app = express();
// const passengerRoutes = require('./routes/passengerRoutes');
// const authRoutes = require('./routes/authRoutes');
// const swaggerUi = require('swagger-ui-express');
// const swaggerDocument = require('./swagger.json');

// const port = process.env.PORT || 3000;
// //Express

// //Final


// app.use(express.json());

// const authenticateJWT = (req, res, next) => {
//   const authHeader = req.headers.authorization;
//   if (authHeader) {
//     const token = authHeader.split(' ')[1];
//     jwt.verify(token, 'your_jwt_secret', (err, user) => {
//       if (err) {
//         return res.sendStatus(403);
//       }
//       req.user = user;
//       next();
//     });
//   } else {
//     res.sendStatus(401);
//   }
// };

// app.use('/api/auth', authRoutes);
// app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
// app.use('/api', authenticateJWT, passengerRoutes);

// // app.listen(3000, () => {
// //   console.log('Server is running on port 3000');
// // });
// app.listen(port, () => {
//   console.log(`Servidor rodando na porta ${port}`);
// });




const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();
const passengerRoutes = require('./routes/passengerRoutes');
const authRoutes = require('./routes/authRoutes');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
const sequelize = require('./config/database');
const Passenger = require('./models/passenger');

const port = process.env.PORT || 3000;

// Middleware para parse do corpo das requisições
app.use(express.json());

// Rota para autenticação (seguindo /api/auth)
app.use('/api/auth', authRoutes);

// Rota para documentação Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Rota para passageiros sem autenticação JWT
app.use('/api', passengerRoutes);


// Sincronizar o banco de dados
sequelize.sync({ force: false }).then(() => {
  console.log('Banco de dados sincronizado.');
}).catch(error => {
  console.error('Erro ao sincronizar banco de dados:', error);
});



// Inicia o servidor na porta especificada
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
