import MovieCard from "./MovieCard";


export default function MovieList(props) {


  let movies = props.movies || [];
  let renderElements = [];

  console.log(`Movies list sent from call is ${movies}`);

  for (let movie of movies) {
    let element = <MovieCard key={movie.imdbID} movie={movie} onReview={ props.onReview} />;
    renderElements.push(element);
  }

  return(
    renderElements
  );
}