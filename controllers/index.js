const router = require('express').Router();
const apiRoutes = require('./api')

// START ONLY FOR TESTING
const { User } = require('../models')
router.get('/', (req,res)=> {
    res.render("test")
}) 
// END TESTING

module.exports = router