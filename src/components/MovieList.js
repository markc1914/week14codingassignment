import MovieCard from "./MovieCard";


export default function MovieList(props) {


  let movies = props.movies || [];
  let renderElements = [];

  //console.log(`Movies list sent from call is ${movies}`);

  for (let movie of movies) {
    let element = <div className="col-md" key={movie.id}>
        <MovieCard key={movie.id} movie={movie} handleReview={ props.handleReview} />
      </div>;
    renderElements.push(element);
  }

  return(
      renderElements
  );
}