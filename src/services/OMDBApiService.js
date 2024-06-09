const apikey = '3d3e8381';
const baseurl = 'http://omdbapi.com';


export default class OMDBApiService {


  async getListByTitle(title){
    let url = `${baseurl}/?apikey=${apikey}&s=${title}&type=movie`;
    const response = await fetch(url);
    const responseJson = await response.json();
    console.log(responseJson);
    let movieList = [];
    for (let movie in responseJson.Search){
      movieList.push(movie);
    }
    return movieList;
  }
}