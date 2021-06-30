import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
    const { id } = useParams()
    const { data: blog, isLoading, errorMssg } = useFetch(process.env.REACT_APP_DB_URL+'/'+ id)
    const history = useHistory()

    const handleClick = () => {
        fetch(process.env.REACT_APP_DB_URL+'/'+ blog.id,{
            method: "DELETE"
        })
        .then(()=>{
            history.push("/")
        })
    }
    
    return (
        <div className="blog-details">
            {errorMssg && <div className="error-mssg">{errorMssg}</div>}
            {isLoading && <div className="loading">Loading........</div>}
            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <h4>Written By {blog.author}</h4>
                    <p>{blog.body}</p>
                    <button onClick={handleClick}>Delete</button>
                </article>
            )}
        </div>
    );
}

export default BlogDetails;