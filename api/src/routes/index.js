const { Router } = require('express');
const router = Router();


// Importar todos los routers;
const dogRoutes = require("./dogRoutes");
const temperamentoRoutes = require('./temperamentoRoutes');
const postRoutes = require('./postRoutes')


// Configurar los routers
router.use("/dogs", dogRoutes)
router.use('/temperaments', temperamentoRoutes)
router.use('/dog', postRoutes)


module.exports = router;
