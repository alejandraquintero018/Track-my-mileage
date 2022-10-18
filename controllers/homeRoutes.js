const router = require('express').Router(); 
const { Run, User } = require('../models'); 
//const withAuth = require('../utils/auth'); 


router.get('/', async (req, res) => {
    console.log('homeroutes present'); 
    const runData = await Run.findAll({ 
        include: [{ model: User }],  
    })
    res.render('homepage');
}); 

module.exports = router; 

