const router = require('express').Router(); 
const userRoutes = require('./userRoutes');
const runRoutes = require('./runRoutes'); 


router.use('/users', userRoutes)
router.use('/run', runRoutes)

module.exports = router; 