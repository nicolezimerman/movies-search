import "./Movie.css";
export function Movie({ movie: { title, year, poster, id, type } }) {
  return (
    <div key={id} className="movie">
      <h3>{title}</h3>
      <p>Year: {year}</p>
      <img src={poster} alt={`Poster from ${title} movie`} />
    </div>
  );
}
