

const validatePost = (post) => {

    let status = {
        code: 1,
        msg: ""
    };
    if (!(post.postName && post.postName.length > 0)) {
        status.code = 0;
        status.msg = "Se requiere un nombre";
        return status;
    }

    if (post.postContent) {
        if (post.postName.length > 255) {
            status.code = 0;
            status.msg = "La longitud del post debe ser menor a 255 caracteres";
            return status;
        } else if (post.postName.length == 0) {
            status.code = 0;
            status.msg = "Se requiere una descripción 2";
            return status;
        }
        return status;
    } else {
        status.code = 0;
        status.msg = "Se requiere una descripción";
        return status;
    }

}

module.exports = validatePost