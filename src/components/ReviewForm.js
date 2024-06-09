
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import MovieReview from '../data/MovieReview';

export default function ReviewForm(props) {

  const [sliderValue, setSliderValue] = useState(0);
  let movie = props.movie;
  const handleReview = props.handleReview;
  const nameKey = `FullNameReview${movie.id}`;
  const emailKey = `emailReview${movie.id}`;
  const reviewKey = `textReview${movie.id}`;


  const handleSliderChange = (e) => {
    setSliderValue(e.target.value);
  };



  const handleSubmitReview = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    console.log(`Form Name is ${form.fullName.value}`);
    let fullname = form.fullName.value;
    let email = form.email.value;
    let starRating = form.starRating.value;
    let detailedReview = form.detailedReview.value;
    let movieReview = new MovieReview(fullname,email,starRating,detailedReview);
    movie.Reviews.push(movieReview);
    console.log(`Movie reviews amount update is ${movie.Reviews.length}`);
    if(handleReview){
      handleReview(movie,e);
    }
  }

  return (
    <Form onSubmit={handleSubmitReview}>
      <Form.Group className="mb-3" controlId={nameKey}>
        <Form.Label>Full Name</Form.Label>
        <Form.Control size="lg" type="text" name="fullName" placeholder="Enter Full Name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId={emailKey}>
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
      <Form.Group>
        <Form.Label>Star Rating</Form.Label>
        <Form.Range
          name="starRating"
          min="0"
          max="5"
          value={sliderValue}
          onChange={handleSliderChange}
        />
      </Form.Group>
      <p>Selected Value: {sliderValue}</p>
      <Form.Group className="mb-3" controlId={reviewKey}>
        <Form.Label>Detailed Review</Form.Label>
        <Form.Control as="textarea" name="detailedReview" rows={3} />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit Review
      </Button>
    </Form>
  )
}