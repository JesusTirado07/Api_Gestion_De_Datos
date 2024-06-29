const express = require('express');
const router = express.Router();
const Cliente = require('../models/Cliente');

router.get('/', async (req, res) => {

    try {

      const clientes = await Cliente.findAll();
      res.json(clientes);

    }
    catch (error) {
      
      console.error('Error al obtener clientes:', error);
      res.status(500).json({ error: 'Error al obtener clientes' });

    }

  });

router.get('/:id', async (req, res) => {
    const clienteId = req.params.id;
  
    try {

      const cliente = await Cliente.findByPk(clienteId);
  
      if (!cliente) {

        return res.status(404).json({ error: 'Cliente no encontrado' });

      }
  
      let fechaRegistroFormateada = null;

      if (cliente.fecha_registro instanceof Date && !isNaN(cliente.fecha_registro)) {

        fechaRegistroFormateada = cliente.fecha_registro.toISOString().slice(0, 10); 

      }
  
      const clienteFormateado = {

        id: cliente.id,
        nombre: cliente.nombre,
        apellido: cliente.apellido,
        edad: cliente.edad,
        email: cliente.email,
        fecha_registro: fechaRegistroFormateada

      };
  
      res.json(clienteFormateado);

    }
    catch (error) {

      console.error('Error al obtener cliente por ID:', error);
      res.status(500).json({ error: 'Error al obtener cliente por ID' });

    }

  });

router.post('/', async (req, res) => {

  try {

    const { nombre, email, telefono } = req.body;

    const nuevoCliente = await Cliente.create({

      nombre,
      email,
      telefono

    });

    res.status(201).json(nuevoCliente);

  } 
  catch (error) 
  {

    console.error('Error al crear cliente:', error);
    res.status(500).json({ error: 'Error al crear cliente' });

  }

});

module.exports = router;
