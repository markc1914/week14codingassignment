
import 'bootstrap/dist/css/bootstrap.min.css';
import LocalMovieService from './services/LocalMovieService';
import { useState, useEffect } from 'react';
import MovieList from './components/MovieList';

const service = new LocalMovieService();

function App() {

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    reload();
  }, []);

  function reload() {
  service.all().then((results) => {
    console.log(`Service call returned : ${results}`);
    setMovies(results);
  });
}
  
  return (
    <div className='contanier'>
      <MovieList movies={movies}/>
    </div>
  );
}

export default App;
