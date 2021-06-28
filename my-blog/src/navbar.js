// type 'sfc' then enter this statless function will be created
//this is a arrow function for a component but normal function can also be created like in app.js
const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>The React Blog</h1>
            <div className="links">
                <a href="/">Home</a>
                <a href="/Create">New Blog</a>
                <a href="/Myblog">My Blog</a>
                <a href="/Contact">Contact</a>
            </div>
        </nav>
    );
}

export default Navbar;