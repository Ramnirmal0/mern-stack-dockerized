import './styles/Styles.css';
import MovieList from './components/movieList';
import Navbar from './components/navbar';
import AddNewMovie from './components/addNewMovie';
import Profile from './components/profile';
import { DataProvider } from './context/dataProvider';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

function App() {
  return (
   <Router>
    <div className="App">
      <DataProvider>
          <Navbar/>
            <Switch>
                <Route exact path="/">
                              <div className="welcomemsg">
                                  <h1>Welcome User !</h1>
                                  <p>We handpicked few movies that you might interested</p>
                              </div>
                              <MovieList/>
                </Route>
                <Route exact path="/add">
                              <div className="welcomemsg">
                                  <h1>Add new Movie User !</h1>
                                  <p>We are now crowd sourcing movie from creators like you</p>
                              </div>
                              <AddNewMovie/>
                </Route>
                <Route exact path="/profile">
                              <div className="welcomemsg">
                                  <h1>My Profile</h1>
                                  <p>Edit you profile . Update your billing details</p>
                              </div>
                              <Profile/>
                </Route>
            </Switch>
        </DataProvider>
    </div>
      </Router>
  );
}

export default App;
