import { useState,useEffect } from "react";
import BlogList from "./BlogList";
//command for integrating json server: npx json-server --watch data/Db.json --port 8000
const Home = () => {
    //output lists
    const [blogs,setBlog] = useState(null)

    useEffect(() => {
     //get all the blogs
     fetch(' http://localhost:8000/blogs')
        .then(result => {
            return result.json() //async: first fetch all data and cast to json  
        })
        .then(data => { // after data fetch complete update state
            setBlog(data)
        })
    },[])//no dependency , so it will fetch data after first time page rendered


    return ( 
        <div className="home">
        {/* left && right : means first left will evalauate , if true then right will , if false right will not be evaluated */}
        {/* Initially blogs is null and  fetching takes time so untill blogs are feteched can't show them */}
        {blogs && <BlogList blogs={blogs} title="All blogs" />}
        </div>
     );
}
 
export default Home;
