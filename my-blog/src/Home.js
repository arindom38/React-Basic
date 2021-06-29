import BlogList from "./BlogList";
import useFetch from "./useFetch";
//command for integrating json server: npx json-server --watch data/Db.json --port 8000
const Home = () => {
    //output lists
    const {data, isLoading ,errorMssg } = useFetch('http://localhost:8000/blogs')


    return (
        <div className="home">
            {errorMssg && <div className="error-mssg">{errorMssg}</div>}
            {isLoading && <div className="loading">Loading........</div>}
            {data && <BlogList blogs={data} title="All blogs" />}
        </div>
    );
}

export default Home;
