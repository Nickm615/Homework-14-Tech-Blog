const User = require('./User');
const Post = require('./Post')
//One to many relationship between posts and users
User.hasMany(Post, {
    foreignKey: 'creator',
    onDelete: 'SET NULL',
    constraints: false
});

Post.belongsTo(User, {
    foreignKey: 'creator'
});

// User.hasMany(Post, {
//     foreignKey: 'creator',
//     onDelete: 'SET NULL',
//     constraints: false
// })


module.exports = { User, Post };
