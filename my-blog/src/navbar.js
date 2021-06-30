import {Link} from "react-router-dom"
// type 'sfc' then enter this statless function will be created
//this is a arrow function for a component but normal function can also be created like in app.js
const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>The React Blog</h1>
            <div className="links">
                <Link to="/">Home</Link> {/* Link will not send req to server, rather link to the route in app.js*/}
                <Link to="/Create">New Blog</Link>
                <Link to="/Myblog">My Blog</Link>
                <Link to="/Contact">Contact</Link>
            </div>
        </nav>
    );
}

export default Navbar;