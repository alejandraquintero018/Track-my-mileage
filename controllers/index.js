const router = require('express').Router();

// START ONLY FOR TESTING
const { User } = require('../models')
router.get('/', (req,res)=> {
    res.render("test")
}) 
// END TESTING

module.exports = router