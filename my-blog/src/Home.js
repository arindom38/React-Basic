const Home = () => {
    const handleClick = (e) => {
        console.log("Hello Coders",e)
    }

    const handleClickAgain = (name,e) => {
        console.log("Hello Mr. "+name,e)
    }
    return ( 
        <div className="home">
            <h1>Home Page</h1>
            <button onClick={handleClick}>Click Me</button>
            {/* handleClickAgain("Pijush") will print without click events, but with anonymous function call it call only click event */}
            <button onClick={(e) => handleClickAgain("Pijush",e)}>Click Me Again</button> 
        </div>
     );
}
 
export default Home;
