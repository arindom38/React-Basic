//this props component is reuseable 
const BlogList = ({blogs,title,handleDelete}) => { //Refactoring 
    return (
        <div className="Blog-List">
        <h2>{title}</h2>
            {blogs.map(blog => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <h4>Created By {blog.author}</h4>
                    <p>{blog.body}</p>
                    <button onClick={() => handleDelete(blog.id)}>Delete</button>
                    {console.log("BlogList: "+blog.id)}
                </div>
            ))}
        </div>
    );
}
 
export default BlogList;