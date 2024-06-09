
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

  function handleReview(movie, e) {
    console.log(`App.handleReview(${movie})`);
    service.updateMovie(movie).then((success) => {
      if (success) {
        reload();
      }
    })
  } 

  return (

    <div className="container text-center">
      <div className="row align-items-start">
        <MovieList movies={movies} handleReview={handleReview} />
      </div>
    </div>
  );
}

export default App;
