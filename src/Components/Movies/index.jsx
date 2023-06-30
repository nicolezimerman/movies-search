import { useEffect, useState } from "react";
import { getMovies } from "../../services/movies";
import "./Movies.css";
import { Movie } from "../Movie";

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
          <div className="movies">
            {movies.map((movie) => {
              return <Movie key={movie.id} movie={movie} />;
            })}
          </div>
        </>
      ) : (
        <p>No results</p>
      )}
    </section>
  );
}
