import { useEffect, useState } from "react";
import { getMovies } from "../services/movies";
export function Movies() {
  const [movies, setMovies] = useState();

  //load data on first render
  useEffect(() => {
    async function fetchData() {
      const response = await getMovies();
      setMovies(response);
    }
    fetchData();
  }, []);

  return (
    <section>
      {movies ? (
        <>
          <h3>Results:</h3>
          {movies.map((movie) => {
            return (
              <div key={movie.imdbID}>
                <p>Title: {movie.title}</p>
                <p>Year: {movie.year}</p>
                <img
                  src={movie.poster}
                  alt={`Poster from ${movie.title} movie`}
                />
              </div>
            );
          })}
        </>
      ) : (
        <p>No results</p>
      )}
    </section>
  );
}
