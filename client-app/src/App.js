import './styles/Styles.css';
import MovieList from './components/movieList';
import Navbar from './components/navbar';
import AddNewMovie from './components/addNewMovie';
import Profile from './components/profile';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

function App() {
  return (
   <Router>
    <div className="App">
     
          <Navbar/>
      <div className="welcomemsg">
                      <h1>Welcome User !</h1>
                      <p>We handpicked few movies that you might interested</p>
                      </div>
            <Switch>
                <Route exact path="/">
                    <MovieList/>
                </Route>
                <Route exact path="/add">
                    <AddNewMovie/>
                </Route>
                <Route exact path="/profile">
                    <Profile/>
                </Route>
            </Switch>
    </div>
      </Router>
  );
}

export default App;
