import Navbar from './navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
//root component which will be render inside index.js
function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Router>
          <Switch path="/"> {/* Route for only home page*/}
            <Home />
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
