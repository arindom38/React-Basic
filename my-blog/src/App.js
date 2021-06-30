import Navbar from './navbar';
import Home from './Home';
import Create from './Create';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
//root component which will be render inside index.js
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar /> {/*no routes added so this will be avialable in every page*/}
        <div className="content">
          <Switch > {/*it routes to one page at time, without it all routes will be accessed*/}
            <Route exact path="/"> {/* Route for only home page, exact property match the path exactly or it will math the first character*/}
              <Home />
            </Route>
            <Route exact path="/create"> {/* Route for only home page*/}
              <Create/>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
