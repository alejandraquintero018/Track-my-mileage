const router = require('express').Router(); 
const { Run, User } = require('../models'); 


router.get('/', async (req, res) => {
    console.log('homeroutes present'); 
    res.render('homepage');
}); 

module.exports = router; 

