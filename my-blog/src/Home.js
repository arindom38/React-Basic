import { useState,useEffect } from "react";
import BlogList from "./BlogList";
//command for integrating json server: npx json-server --watch data/Db.json --port 8000
const Home = () => {
    //output lists
    const [blogs,setBlog] = useState([
        {title: "React Begining",body:"A react ....",author:"Kyle",id:1}, //an object
        {title: "Node js Begining",body:"A NOde js ....",author:"Jack",id:2},
        {title: "Spring MVC",body:"A Spring ....",author:"Kyle",id:3},
    ])

    const [count,setCount] = useState(0)

    //this function execute in evertime this component is rendered
    useEffect(() => {
     console.log("I will come everytime you render")   
    },[count]) //Dependency array only affect render to the dependencies afte click render button one time

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog=> (blog.id !== id))
        setBlog(newBlogs)
    }
    return ( 
        <div className="home">
            <BlogList blogs={blogs} title="All blogs" handleDelete={handleDelete} /> {/*passing/receiveing the functions as props*/}
            <button onClick={() => (setCount(count+1))}>Render me</button>
            <p>you click {count} times</p>
        </div>
     );
}
 
export default Home;
