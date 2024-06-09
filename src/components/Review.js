import ListGroup from 'react-bootstrap/ListGroup';

export default function Review(props){
  const review = props.review;
  
  return(
    <ListGroup>
      <ListGroup.Item>Reviewer: {review.fullName}</ListGroup.Item>
      <ListGroup.Item>Email: {review.email}</ListGroup.Item>
      <ListGroup.Item>Review Date: {review.reviewDate}</ListGroup.Item>
      <ListGroup.Item>Stars: {review.stars}</ListGroup.Item>
      <ListGroup.Item>Details: {review.detailedReview}</ListGroup.Item>
    </ListGroup>
  )
}