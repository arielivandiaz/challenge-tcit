
const formatList = (posts) => {

    let jsonPosts = [];
    posts.map(p =>
        jsonPosts.push(
            p.dataValues
        )
    );
    return jsonPosts;

}

module.exports = { formatList }