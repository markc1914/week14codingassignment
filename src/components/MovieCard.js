import Card from 'react-bootstrap/Card';
import ReviewForm from './ReviewForm';
import ReviewList from './ReviewList';

export default function MovieCard(props) {
  let movie = props.movie;
  let handleReview = props.handleReview;

  return (
    <Card style={{ width: '18rem' }} id={movie.id} data-id={movie.id}>
      <Card.Img variant="top" src={props.movie.Poster} />
      <Card.Body>
        <Card.Title>{movie.Title}</Card.Title>
      </Card.Body>
      <Card.Body>Year Released: {movie.Year}</Card.Body>
      <Card.Body>Reviews</Card.Body>
      <ReviewList movie={movie}/>
      <ReviewForm movie={movie} handleReview={handleReview}/>
    </Card>
  );
}
