//this props component is reuseable 
const BlogList = ({blogs,title}) => { //Refactoring 
    return (
        <div className="Blog-List">
        <h2>{title}</h2>
            {blogs.map(blog => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <h4>Created By {blog.author}</h4>
                    <p>{blog.body}</p>
                </div>
            ))}
        </div>
    );
}
 
export default BlogList;