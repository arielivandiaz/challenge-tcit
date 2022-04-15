const Sequelize = require('sequelize');
const db = require('../services/dbConnection.js');

const Post = db.define('posts', {

    postName: {
        field: "post_name",
        type: Sequelize.STRING
    },
    postContent: {
        field: "post_content",
        type: Sequelize.STRING
    },
    createdAt: {
        field: "created_at",
        type: Sequelize.DATE,
    }
}, { timestamps: false, });

module.exports = Post; 