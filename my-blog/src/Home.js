import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
    //output lists
    const [blogs,setBlog] = useState([
        {title: "React Begining",body:"A react ....",author:"Kyle",id:1}, //an object
        {title: "Node js Begining",body:"A NOde js ....",author:"Jack",id:2},
        {title: "Spring MVC",body:"A Spring ....",author:"Kyle",id:3},
    ])
    const handleDelete = (id) => {
        //for understanding the flow see console
        console.log("Home: "+id)
        //filter out the blog that to be deleted
        const newBlogs = blogs.filter(blog=> (blog.id !== id))
        setBlog(newBlogs)
    }
    return ( 
        <div className="home">
            <BlogList blogs={blogs} title="All blogs" handleDelete={handleDelete} /> {/*passing/receiveing the functions as props*/}
        </div>
     );
}
 
export default Home;
