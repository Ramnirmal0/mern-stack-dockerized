import './styles/Styles.css';
import MovieList from './components/movieList';
import Navbar from './components/navbar';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <MovieList/>
    </div>
  );
}

export default App;
