const User = require('./User');
const Post = require('./Post')

Post.hasOne(User, {
    foreignKey: 'creator',
    onDelete: 'SET NULL'
});

User.belongsTo(Post, {
    foreignKey: 'creator'
});

User.hasMany(Post, {
    foreignKey: 'creator',
    onDelete: 'SET NULL'
})


module.exports = { User, Post };
