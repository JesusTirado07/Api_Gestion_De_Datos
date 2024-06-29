const express = require('express');
const router = express.Router();
const Direccion = require('../models/Direccion');

router.get('/', async (req, res) => {

  try {

    const direcciones = await Direccion.findAll();
    res.json(direcciones);

  }
  catch (error) {

    console.error('Error al obtener direcciones:', error);
    res.status(500).json({ error: 'Error al obtener direcciones' });

  }

});

router.post('/', async (req, res) => {

  const direccionId = req.query.id;
  const { calle, ciudad, estado, codigo_postal } = req.body;

  if (!direccionId) {

    return res.status(400).json({ error: 'Se requiere el ID de la dirección' });

  }

  try {

    const direccion = await Direccion.findByPk(direccionId);

    if (!direccion) {

      return res.status(404).json({ error: 'Dirección no encontrada' });

    }

    direccion.calle = calle || direccion.calle;
    direccion.ciudad = ciudad || direccion.ciudad;
    direccion.estado = estado || direccion.estado;
    direccion.codigo_postal = codigo_postal || direccion.codigo_postal;

    await direccion.save();

    res.status(200).json(direccion);

  } 
  catch (error) {

    console.error('Error al actualizar dirección:', error);
    res.status(500).json({ error: 'Error al actualizar dirección' });

  }

});

module.exports = router;
