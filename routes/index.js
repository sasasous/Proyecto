/* Requerir express */
const express = require('express');
/* Ejecución del método Router*/
const router = express.Router();
/* Requerir el controlador */
const indexController = require('../controllers/indexController');

/* RUTAS */
/* Ruta que muestra la vista principal */
router.get('/', indexController.index);

/*Ruta que muestra el detalle de un producto*/
router.get('/id/:id', indexController.show);

/* Exportar el router */
module.exports = router;