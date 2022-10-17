const router = require('express').Router();
const apiRoutes = require('./api'); 
const homeRoutes = require('./homeRoutes')

router.use('./', homeRoutes);
router.use('./api', apiRoutes); 

// START ONLY FOR TESTING
// const { User } = require('../models')
// router.get('/', (req,res)=> {
//     res.render("test")
// }) 
// END TESTING

module.exports = router