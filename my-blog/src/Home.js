import { useState,useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
    //output lists
    const [blogs,setBlog] = useState([
        {title: "React Begining",body:"A react ....",author:"Kyle",id:1}, //an object
        {title: "Node js Begining",body:"A NOde js ....",author:"Jack",id:2},
        {title: "Spring MVC",body:"A Spring ....",author:"Kyle",id:3},
    ])

    //this function execute in evertime this component is rendered
    useEffect(() => {
     console.log("I will come everytime you render")   
    })

    const handleDelete = (id) => {
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
