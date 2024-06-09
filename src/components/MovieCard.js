import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ReviewForm from './ReviewForm';

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
      <ReviewForm movie={movie} handleReview={handleReview}/>
      <ListGroup className="list-group-flush">
      </ListGroup>
    </Card>
  );
}
