const router = require('express').Router(); 
const { Run, User } = require('../../models'); 

router.post('/', async (req, res) => {
    console.log('userRoutes present'); 
    try {
        const userData = await User.create(req.body); 
        res.status(200).json(userData); 
    } catch (err) {
        console.log(err); 
        res.status(400).json(err);
    }
    
})