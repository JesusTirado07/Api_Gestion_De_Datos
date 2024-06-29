const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Orden = sequelize.define('Orden', {

    id: {

        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true

    },

    cliente_id: {

        type: DataTypes.INTEGER,
        allowNull: false,
        references: {

            model: 'clientes',
            key: 'id'

        }

    },

    producto: {

        type: DataTypes.STRING(100),
        allowNull: false

    },

    cantidad: {

        type: DataTypes.INTEGER,
        allowNull: false

    },

    fecha_pedido: {

        type: DataTypes.DATEONLY,
        allowNull: false

    },
    
    folio: {

        type: DataTypes.STRING(50),
        allowNull: false

    }
    
}, 

{

    tableName: 'ordenes',
    timestamps: false

});

module.exports = Orden;
