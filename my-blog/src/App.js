import './App.css';

//A component which will be render inside index.js
function App() { //anything inside this function before return is js 
  const title = "Welcome to react world"
  const likes = 50 //while rending all types of varaibel type is converted to string
  const car = { name:'Lambogini',body:'suv',MPL:'5'} //if only object is printed it will cause error
  const arr = [1,2,4.5]
  const link = "https//www.google.com"
  return ( //return must return only single element not multiple
    <div className="App">
      <div className="content">
        <h1>{title}</h1>
        <p>{likes}</p>
        <p>{car.name}</p>
        {/* <p>{car}</p> this will calsue error*/}
        <p>{arr}</p>
        <a href={link}>Google Site</a>
        <p>{Math.random()*10}</p>
      </div>
    </div>
    // {/* <p></p> */} this will create error as only one element can be returned
  );
}

export default App;
