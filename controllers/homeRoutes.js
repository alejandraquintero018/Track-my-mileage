const router = require('express').Router(); 
const { Run, User } = require('../models'); 
//const withAuth = require('../utils/auth'); 


router.get('/', async (req, res) => {
    console.log('homeroutes present'); 

    try {
        const runData = await Run.findAll({ 
            include: [{ model: User }], 
        });

        const runs = runData.map(run => {
            return run.get({plain: true})
        });

        console.log(runs)

        res.render('home', {runs});
    } catch (error) {
        res.status(500).end()
    }
}); 

router.get('/login', async (req, res) => {
    res.render('login')
})

module.exports = router; 

