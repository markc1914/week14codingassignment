import ListGroup from 'react-bootstrap/ListGroup';
import Review from './Review';

export default function ReviewList (props){

  const movie = props.movie;
  const reviews = movie.Reviews || [];
  let renderElements = [];

  for (let review of reviews) {
    let element = <ListGroup className="list-group-flush"><Review review={review}/></ListGroup>
    renderElements.push(element)
  }
  return(
      renderElements
  )
}