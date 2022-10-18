const User = require('./User');
const Run = require('./Run');

User.hasMany(Run);

Run.belongsTo(User);

module.exports = { User, Run };