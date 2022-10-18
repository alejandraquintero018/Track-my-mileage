const router = require('express').Router(); 
const { User } = require('../../models'); 

router.post('/', async (req, res) => {
    console.log('userRoutes present'); 
    try{ 
        const userData = await User.create(req.body); 
        res.status(200).json(userData); 
    }catch (err) { 
        res.status(400).json(err); 
    }
}); 

module.exports = router; 
