import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home/Home';
import AddContent from './Components/AddContent/AddContent';
import BlogDetails from './Components/BlogDetails/BlogDetails';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
            <Home />
        </Route>
        <Route path="/home">
            <Home />
        </Route>
        <Route path="/addContent">
            <AddContent />
        </Route>
        <Route path="/details/:_id">
            <BlogDetails />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
