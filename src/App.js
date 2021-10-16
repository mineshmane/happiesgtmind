import logo from './logo.svg';
import './App.css';
import Register from './components/registration/register';
import Home from './components/dashboard/dashboard';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (
    <div className="App">

      this is app js file
      <Home />
     

      <Router>
      <div>
       

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/">
            <Register />
          </Route>
        
          {/* <Route path="/home">
            <Home />
          </Route> */}
        </Switch>
      </div>
    </Router>
    </div>
  );
}

export default App;
