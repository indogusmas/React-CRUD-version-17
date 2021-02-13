import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import BlogDetails from './BlogDetails';
import Create from './Create';
import Home from './Home';
import NavBar from './Navbar';
import NotFound from './NotFound';


function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/create">
            <Create/>
          </Route>
          <Route path="/blog/:id">
            <BlogDetails/>
          </Route>
          <Route path="*">
            <NotFound/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
