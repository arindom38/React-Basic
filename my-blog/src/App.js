import './App.css';
import Navbar from './navbar';
import Home from './Home';

//root component which will be render inside index.js
function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />
      </div>
    </div>
  );
}

export default App;
