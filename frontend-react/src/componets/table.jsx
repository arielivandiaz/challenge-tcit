export default function Table(props) {

    const handleSubmit = (event) => {
        event.preventDefault();        
        props.sendDeletePost({id: event.target.id.value});        
    }


    return (<div>
        <table >
            {props.posts.length < 1 && (
                <caption>
                    No hay entradas
                </caption>
            )}
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Descripción</th>
                    <th>Acción</th>
                </tr>
            </thead>
            <tbody >
                {props.posts.map(post => {
                    return (
                        <tr key={post.id}>
                            <td>{post.postName}</td>
                            <td>{post.postContent}</td>
                            <td>
                                <form onSubmit={handleSubmit} >
                                    <input name="id" type="number" readOnly value={post.id}  hidden />
                                    <button type="submit">Eliminar</button>
                                </form>
                            </td>
                        </tr>
                    )
                })
                }
            </tbody>
        </table>
    </div>
    )
}

