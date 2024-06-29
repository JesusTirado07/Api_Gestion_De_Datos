const express = require('express');
const sequelize = require('../Api_Gestion_De_Datos/config/db');
const app = express();
const port = 3000;
app.use(express.json()); 
sequelize.authenticate()

  .then(() => {

    console.log('Conectado a la base de datos con exito.');

  })
  .catch(err => {

    console.error('Error al conectar a la base de datos:', err);

  });

const clienteRoutes = require('./routes/cliente');
const direccionRoutes = require('./routes/direccion');
const ordenRoutes = require('./routes/orden');

app.use('/api/Clientes', clienteRoutes);
app.use('/api/Direccion', direccionRoutes);
app.use('/api/Ordenes', ordenRoutes);

app.listen(port, () => {

  console.log(`Server running on port ${port}`);
  
});

//http://localhost:3000/api/clientes
//http://localhost:3000/api/direccion
//http://localhost:3000/api/ordenes