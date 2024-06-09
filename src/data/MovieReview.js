export default class MovieReview {
  constructor(fullName,email,stars,detailedReview) {
    this.fullName = fullName;
    this.email = email;
    this.stars = stars;
    this.detailedReview = detailedReview;
    this.reviewDate = new Date();
  }
}