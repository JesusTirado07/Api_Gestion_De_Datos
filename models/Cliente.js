const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/db'); 

const Cliente = sequelize.define('Cliente', {

  id: {

    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,

  },

  nombre: {

    type: DataTypes.STRING(100),
    allowNull: true,

  },

  apellido: {

    type: DataTypes.STRING(100),
    allowNull: true,

  },

  edad: {

    type: DataTypes.INTEGER,
    allowNull: true,
    
  },

  email: {

    type: DataTypes.STRING(100),
    allowNull: true,

  },

  fecha_registro: {

    type: DataTypes.DATE,
    allowNull: true,
    
  },

}, 

{

  tableName: 'clientes',
  timestamps: false,

});

module.exports = Cliente;
