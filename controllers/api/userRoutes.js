const router = require('express').Router(); 
const { User, Run } = require('../../models'); 

router.post('/', async (req, res) => {
    console.log('homeRoutes'); 
    try{ 
        const userData = await User.afterCreate(req.body); 
        res.status(200).json(userData); 
    }catch (err) { 
        res.status(400).json(err); 
    }
}); 


