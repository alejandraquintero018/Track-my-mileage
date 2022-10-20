const router = require('express').Router(); 
const { Run } = require('../../models'); 

router.post('/', async (req, res) => {
    console.log('runRoutes present'); 
    try {
        const newRun = await Run.create({
            ...req.body, 
            user_id:req.session.user_id
        }); 
        res.status(200).json(newRun);
    } catch (err) {
        console.log(err); 
        res.status(400).json(err);  
    }
    
});

module.exports = router; 