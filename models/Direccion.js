const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Direccion = sequelize.define('Direccion', {

  id: {

    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,

  },

  cliente_id: {

    type: DataTypes.INTEGER,
    allowNull: true,

  },

  calle: {

    type: DataTypes.STRING(255),
    allowNull: true,

  },

  ciudad: {

    type: DataTypes.STRING(100),
    allowNull: true,

  },

  codigo_postal: {

    type: DataTypes.STRING(20),
    allowNull: true,

  },

}, 

{

  tableName: 'direcciones',
  timestamps: false,

});

module.exports = Direccion;