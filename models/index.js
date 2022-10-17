const User = require('./User');
const Run = require('./Run');

User.hasMany(Run, {
    foreignKey: 'user_username', 
    onDelete: 'CASCADE'
});

Run.belongsTo(User, {
    foreignKey: 'user_username',
})

module.exports = { User, Run }