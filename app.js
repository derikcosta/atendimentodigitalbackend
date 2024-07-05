const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();
const passengerRoutes = require('./routes/passengerRoutes');
const authRoutes = require('./routes/authRoutes');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

const port = process.env.PORT || 3000;
//Express

//Final


app.use(express.json());

const authenticateJWT = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (authHeader) {
    const token = authHeader.split(' ')[1];
    jwt.verify(token, 'your_jwt_secret', (err, user) => {
      if (err) {
        return res.sendStatus(403);
      }
      req.user = user;
      next();
    });
  } else {
    res.sendStatus(401);
  }
};

app.use('/api/auth', authRoutes);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/api', authenticateJWT, passengerRoutes);

// app.listen(3000, () => {
//   console.log('Server is running on port 3000');
// });
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
