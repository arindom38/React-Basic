import { useState } from "react";
import { useHistory } from "react-router-dom";
const Create = () => {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [author, setAuthor] = useState('')
    const [isLoading,setIsLoading] = useState(false)
    const history = useHistory()

    const handleSubmit = (e) => {
        e.preventDefault()
        const blog = {title,body,author}
        setIsLoading(true) //after submitting 
        fetch(process.env.REACT_APP_DB_URL,{
            method: 'POST',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify(blog)
        })
        .then((res)=>{
            setIsLoading(false)
            history.push("/") //redirected to home page
        })
    }
    return (
        <div className="create">
            <h2>Add New Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog Title:</label>
                <input
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label>Blog Body:</label>
                <textarea
                    required
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                ></textarea>
                <label>Blog Author:</label>
                <select
                    required
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                >
                    <option value="mario">mario</option>
                    <option value="yoshi">yoshi</option>
                </select>
                {!isLoading && <button>Add Blog</button>}
                {isLoading && <button disabled>Add Blog</button>}
                {isLoading && <p>Creating New Blog......</p>}
                
            </form>
        </div>
    );
}

export default Create;