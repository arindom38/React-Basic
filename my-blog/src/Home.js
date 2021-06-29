import { useState } from "react";

const Home = () => {
    //output lists
    const [blogs,setBlog] = useState([
        {title: "React Begining",body:"A react ....",author:"Kyle",id:1}, //an object
        {title: "Node js Begining",body:"A NOde js ....",author:"Jack",id:2},
        {title: "Spring MVC",body:"A Spring ....",author:"Mario",id:3},
    ])
    return ( 
        <div className="home">
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
 
export default Home;
