const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Run extends Model { }

Run.init(
    {
        notes: {
            type: DataTypes.STRING,
        },
        date_created: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },
        distance: {
            //allow the user to track by miles 
            type: DataTypes.DECIMAL,
            allowNull: false,
        },
        duration: {
            //for number of minutes user ran
            type: DataTypes.INTEGER
        },
    },
    {
        sequelize
    },
);

module.exports = Run; 