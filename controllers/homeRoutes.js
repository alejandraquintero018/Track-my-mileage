const router = require('express').Router();
const { Run, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
    console.log('homeroutes present');

    try {
        const runData = await Run.findAll({
            include: [{ model: User }],
        });

        const runs = runData.map(run => {
            return run.get({ plain: true })
        });

        console.log(runs)
        res.render('home',
            {
                runs,
                logged_in: req.session.logged_in,
            });
    } catch (error) {
        res.status(500).end()
    }
});

router.get('/login', async (req, res) => {
    if (req.session.logged_in) {
        res.redirect('/profile');
        return;
    }
    res.render('login')
});

router.get('/profile', withAuth, async (req, res) => {
    console.log('here');
    try {
        const runData = await Run.findByPk(
            req.params.id,
            {
                include: [{ model: Run }]
            });

        // const runs = runData.map(run => {
        //     return run.get({ plain: true })
        // });
        //console.log(runs)
        res.render('profile');
    } catch (error) {
        res.status(500).end()
        console.log(error);
    }
})

module.exports = router;

