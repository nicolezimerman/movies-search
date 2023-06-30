const API_KEY = `12f10477`;
const API_BASE_URL = `https://www.omdbapi.com/?apikey=${API_KEY}&type=movie`;
//const API_POSTERS_URL = `http://img.omdbapi.com/?apikey=${API_KEY}&`;

// get all movies
export const searchMovies = async ({ search }) => {
  if (search === "") return [];
  const response = await fetch(`${API_BASE_URL}&s=${search}`);
  const jsonData = await response.json();
  //handle error
  const mappedMovies = await jsonData.Search.map((movie) => {
    return {
      title: movie.Title,
      year: movie.Year,
      id: movie.imdbID,
      type: movie.Type,
      poster: movie.Poster,
    };
  });
  return mappedMovies;
};

/* API response example:
{
"Title": "Avengers: Endgame",
"Year": "2019",
"imdbID": "tt4154796",
"Type": "movie",
"Poster": "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg"
},*/
