import { useState, useRef } from 'react'

export default function FormCreatePost(props) {

    const [currentPost, setCurrentPost] = useState({
        postName: '',
        postContent: ''
    })

    const inputName = useRef()
    const inputContent = useRef()

    const updateName = (e) => {
        setCurrentPost({ ...currentPost, postName: e.target.value })
    }
    const updateContent = (e) => {
        setCurrentPost({ ...currentPost, postContent: e.target.value })
    }


    const sendNewPost = (e) => {
        e.preventDefault();        
        props.submitPost(currentPost);  
        setCurrentPost({
            postName: '',
            postContent: ''
        });      
        inputName.current.value = ""
        inputContent.current.value = ""
    }
    

    return (
        <div>
            <form method="post"  onSubmit={sendNewPost} className="col-row new-post-form">
                <input name="name" type="text" ref={inputName} placeholder="Nombre"
                    onChange={updateName}
                    required
                />
                <input name="description" type="text" ref={inputContent} placeholder="Descripción"
                    onChange={updateContent}
                    required
                />
                <button type='submit'>Crear</button>
            </form>
        </div>
    )
}
