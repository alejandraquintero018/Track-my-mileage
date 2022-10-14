const router = require('express').Router(); 
const apiRoutes = require('./user')

router.use('./users', userRoutes)
router.use('./posts', postRoutes)

module.exports = router; 

