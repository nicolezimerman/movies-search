import "./Movies.css";
import { Movie } from "../Movie";

export function Movies({ movies }) {
  return (
    <section>
      {movies.length !== 0 ? (
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
