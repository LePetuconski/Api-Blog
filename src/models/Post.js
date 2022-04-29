const Sequelize = require('sequelize') 
const connection = require('../database') 

const Post = connection.define('post', { 
    title: {
        type: Sequelize.STRING(100),
        allowNull: false
    },

    slug: {
        type: Sequelize.STRING,
        allowNull: false
    },

    image: {
        type: Sequelize.STRING,
        allowNull: false
    },

    content: {
        type: Sequelize.TEXT,
        allowNull: false
    },

    description:{
        type: Sequelize.STRING(100),
        allowNull: false
    },

    userAuthor: {
        type: Sequelize.STRING(100),
        allowNull: false
    },

})

Post.sync({ force: false }) 

module.exports = Post 