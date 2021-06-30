import Navbar from './navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
//root component which will be render inside index.js
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar /> {/*no routes added so this will be avialable in every page*/}
        <div className="content">
          <Switch >
            <Route path="/"> {/* Route for only home page*/}
              <Home />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
