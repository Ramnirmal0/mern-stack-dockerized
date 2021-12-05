import './styles/Styles.css';
import MovieList from './components/movieList';
import Navbar from './components/navbar';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className="welcomemsg">
        <h1>Welcome User !</h1>
        <p>We handpicked few movies that you might interested</p>
        </div>
      
      <MovieList/>
    </div>
  );
}

export default App;
