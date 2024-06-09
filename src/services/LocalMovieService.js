const baseurl = 'http://localhost:3001';

export default class LocalMovieService {

  async all(){
    let url = `${baseurl}/Movies`;
    return fetch(url).then((results) => results.json()).then((data) => {
      //console.log(`Json returned as ${JSON.stringify(data)}`);
      
       return data.map(movie => {
        return {
          id : movie.id,
          Title : movie.Title,
          Year : movie.Year,
          Poster : movie.Poster,
          Reviews : movie.Reviews
        };
      });
    });
  }

  async updateMovie(movie){
    let url = `${baseurl}/Movies/${movie.id}`;
    const response = await fetch(url, {
      method : "PUT"
    });
    const responseJson = await response.json();
    return !!(responseJson);
  }
}