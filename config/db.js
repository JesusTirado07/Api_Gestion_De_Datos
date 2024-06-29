const { Sequelize } = require('sequelize');

const sequelize = new Sequelize( 'pruebacompufax', 'root', '', {

  host: 'localhost',
  dialect: 'mysql',
  port: 3306,
  logging: false,

});

sequelize.authenticate()

  .then(() => {

    console.log('Conectado a la base de datos con exito.');

  })

  .catch(err => {

    console.error('No se pudo conectar a la base de datos:', err);

  });

module.exports = sequelize;
