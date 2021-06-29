import { useState, useEffect } from "react";
import BlogList from "./BlogList";
//command for integrating json server: npx json-server --watch data/Db.json --port 8000
const Home = () => {
    //output lists
    const [blogs, setBlog] = useState(null)
    const [isLoading, setIsLoading] = useState(true)


    useEffect(() => {
        setTimeout(() => { //timeout is used for just simulating real fetching time
            fetch(' http://localhost:8000/blogs')
                .then(result => {
                    return result.json()
                })
                .then(data => {
                    setBlog(data)
                    setIsLoading(false)
                })
        }, 1000)
    }, [])


    return (
        <div className="home">
            {isLoading && <div className="loading">Loading........</div>}
            {blogs && <BlogList blogs={blogs} title="All blogs" />}
        </div>
    );
}

export default Home;
