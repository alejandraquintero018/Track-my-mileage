const User = require('./User');
const Run = require('./Run');

User.hasMany(Run, {
    foreignKey: "user_id"
});

Run.belongsTo(User, {
    foreignKey: "user_id"
});

module.exports = { User, Run };