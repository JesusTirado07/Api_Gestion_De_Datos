const express = require('express');
const router = express.Router();
const Orden = require('../models/Orden');
const { v4: uuidv4 } = require('uuid');

router.get('/', async (req, res) => {

    try {

        const ordenes = await Orden.findAll();
        res.json(ordenes);

    } 
    catch (error) {

        console.error('Error al obtener órdenes:', error);
        res.status(500).json({ error: 'Error al obtener órdenes' });

    }

});

function generarFolio() {

    return 'TEST' + uuidv4().slice(0, 6).toUpperCase();

  }
  
  router.post('/', async (req, res) => {

    const { cliente_id, items } = req.body;
  
    if (!cliente_id || !items || !Array.isArray(items)) {

      return res.status(400).json({ error: 'Datos de entrada inválidos' });

    }
  
    const folio = generarFolio();

    const ordenes = items.map(item => ({

      cliente_id,
      producto: item.producto,
      cantidad: item.cantidad,
      folio

    }));
  
    try {

      await Orden.bulkCreate(ordenes);
      res.status(201).json({ folio });

    } 
    catch (error) {

      console.error('Error al crear la orden:', error);
      res.status(500).json({ error: 'Error al crear la orden' });

    }

  });

router.get('/:cliente_id', async (req, res) => {

    const { cliente_id } = req.params;
  
    try {

      const ordenes = await Orden.findAll({

        where: {

          cliente_id

        }

      });
  
      if (ordenes.length === 0) {

        return res.status(404).json({ error: 'No se encontraron órdenes para este cliente' });

      }
  
      res.json(ordenes);

    } 
    catch (error) {

      console.error('Error al obtener órdenes del cliente:', error);
      res.status(500).json({ error: 'Error al obtener órdenes del cliente' });

    }

  });

router.get('/folio/:folio', async (req, res) => {

    const { folio } = req.params;
  
    try {
        
      const ordenes = await Orden.findAll({

        where: {

          folio

        }

      });
  
      if (ordenes.length === 0) {

        return res.status(404).json({ error: 'No se encontraron órdenes con este folio' });

      }
  
      res.json(ordenes);

    } 
    catch (error) {

      console.error('Error al obtener órdenes por folio:', error);
      res.status(500).json({ error: 'Error al obtener órdenes por folio' });

    }

  });
  
module.exports = router;
