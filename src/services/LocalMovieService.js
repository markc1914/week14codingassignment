import Movie from "../data/Movie";

var util = require('util');

const baseurl = 'http://localhost:3001';

export default class LocalMovieService {

  safeStringify = (obj, indent = 2) => {
    let cache = [];
    const retVal = JSON.stringify(
      obj,
      (key, value) =>
        typeof value === "object" && value !== null
          ? cache.includes(value)
            ? undefined // Duplicate reference found, discard key
            : cache.push(value) && value // Store value in our collection
          : value,
      indent
    );
    cache = null;
    return retVal;
  };

  async all() {
    let url = `${baseurl}/Movies`;
    return fetch(url).then((results) => results.json()).then((data) => {
      //console.log(`Json returned as ${JSON.stringify(data)}`);

      return data.map(movie => {
        return {
          id: movie.id,
          Title: movie.Title,
          Year: movie.Year,
          Poster: movie.Poster,
          Reviews: movie.Reviews
        };
      });
    });
  }

  async updateMovie(movie) {
    let submitMovie = new Movie(movie.id,movie.Title,movie.Year,movie.Reviews,movie.Poster);
    let url = `${baseurl}/Movies/${movie.id}`;

    const postData = this.safeStringify(submitMovie);
    console.log(`Submit Movie is ${postData}`);

    const response = await fetch(url, {
      method: "PUT",
      body: postData
    });
    const responseJson = await response.json();
    return !!(responseJson);
  }
}