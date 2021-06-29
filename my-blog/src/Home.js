import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
    //output lists
    const [blogs,setBlog] = useState([
        {title: "React Begining",body:"A react ....",author:"Kyle",id:1}, //an object
        {title: "Node js Begining",body:"A NOde js ....",author:"Jack",id:2},
        {title: "Spring MVC",body:"A Spring ....",author:"Kyle",id:3},
    ])
    return ( 
        <div className="home">
            <BlogList blogs={blogs} title="All blogs" /> 
        </div>
     );
}
 
export default Home;
