// type 'sfc' then enter this statless function will be created
//this is a arrow function for a component but normal function can also be created like in app.js
const Navbar = () => {
    return ( 
        <nav className="Navbar">
            <a href="/">Home</a>
            <a href="/Create">Create Blog</a>
            <a href="/Myblog">My Blog</a>
            <a href="/c=Contact">Cotact</a>
        </nav>
     );
}
 
export default Navbar;