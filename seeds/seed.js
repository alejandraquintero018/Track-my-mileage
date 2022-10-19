const sequelize = require('../config/connection');
const { Run } = require('../models'); 

const runData = require('./runData.json'); 

const seedRunData = async () => {
    await sequelize.sync({ force: true });

    const run = await Run.create(runData);
    process.exit(0); 
}
