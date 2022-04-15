const Posts = require('../models/Post');
const validatePost = require("../validations/post");
const managePosts = require("../controllers/post");


const home = async (req, res) => {
    try {
        const posts = await Posts.findAll();

        res.render('index', { title: 'Laguna', posts: managePosts.formatList(posts) });

    } catch (e) {
        console.log("ERROR", e);
        res.status(404);
    }
}

const create = async (req, res) => {
    try {
        const currentPost = {
            postName: req.body.name,
            postContent: req.body.description
        };

        const validation = validatePost(currentPost);

        if (validation.code == 1) {
            const posts = await Posts.create(currentPost);
            res.status(202).send(posts.dataValues);
        } else
            res.status(406).send(validation.msg);
    } catch (e) {
        console.log("ERROR", e);
        res.status(404);
    }
}


const list = async (req, res) => {
    try {
        const posts = await Posts.findAll();
        res.status(200).send({
            posts: managePosts.formatList(posts)
        });
    } catch (e) {
        console.log("ERROR", e);
        res.status(404);
    }
}

const deleteById = async (req, res) => {
    try {
        //const posts = await Posts.findAll();  
        
        const id = parseInt(req.body.id);       

        const postDeleted = await Posts.findOne({
            where: {
                id
            }
        });
        
        if (postDeleted.id) {
            const post = await Posts.destroy({
                where: {
                    id
                }
            });
        } else {
            res.status(404).send("Post no encontrado");
        }
        
        res.status(200).send(postDeleted.dataValues);

    } catch (e) {
        console.log("ERROR", e);
        res.status(404);
    }
}




const random = (req, res) => {
    res.status(200).send({ data: Math.random() })
}

module.exports = { create, home, list, deleteById }