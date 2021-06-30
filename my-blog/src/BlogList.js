import { Link } from "react-router-dom";
//this props component is reuseable 
const BlogList = ({ blogs, title }) => { //Refactoring 
    return (
        <div className="Blog-List">
            <h2>{title}</h2>
            {blogs.map(blog => (
                <div className="blog-preview" key={blog.id}>
                    <Link to={`/blogs/${blog.id}`}>
                        <h2>{blog.title}</h2>
                        <h4>Created By {blog.author}</h4>
                    </Link>
                </div>
            ))}
        </div>
    );
}

export default BlogList;