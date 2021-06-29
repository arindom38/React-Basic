import { useState, useEffect } from "react";
import BlogList from "./BlogList";
//command for integrating json server: npx json-server --watch data/Db.json --port 8000
const Home = () => {
    //output lists
    const [blogs, setBlog] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [errorMssg, setErrorMssg] = useState(null)

    useEffect(() => {
        setTimeout(() => { //timeout is used for just simulating real fetching time
            fetch(' http://localhost:8000/blogs')
                .then(res => {
                    if (!res.ok) {
                        throw Error('could not find the resources') //so it goes to catch scope
                    }
                    return res.json()
                })
                .then(data => {
                    setBlog(data)
                    setIsLoading(false)
                    setErrorMssg(null)
                })
                .catch(err => {
                    setIsLoading(false)
                    setErrorMssg(err.message)
                })
        }, 1000)
    }, [])


    return (
        <div className="home">
            {errorMssg && <div className="error-mssg">{errorMssg}</div>}
            {isLoading && <div className="loading">Loading........</div>}
            {blogs && <BlogList blogs={blogs} title="All blogs" />}
        </div>
    );
}

export default Home;
