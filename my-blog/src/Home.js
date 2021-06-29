import { useState } from "react";

const Home = () => {
    //reactive value
    const [name,setName] = useState("Jack") //initial value jack
    const [age,setAge] = useState(20) //initial age 20

    const handleClick = () => {
        //change state on clik event
        setName("Mario")
        setAge(30)    
    }
    return ( 
        <div className="home">
            <h1>Home Page</h1>
            <p>{name} is {age} years old</p>
            <button onClick={handleClick}>Click Me</button>
        </div>
     );
}
 
export default Home;
