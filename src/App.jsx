import { useState } from "react";
import "./App.css";
import { Movies } from "./Components/Movies";
import { useMovies } from "./Hooks/useMovies";

function App() {
  const [search, setSearch] = useState("");
  const { movies, getMovies } = useMovies({ search });

  const handleChange = (event) => {
    const newSearchValue = event.target.value;
    setSearch(newSearchValue);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    getMovies({ search });
  };

  return (
    <main>
      <h1>Movies search</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} />
        <button>Search</button>
      </form>
      <Movies movies={movies} />
    </main>
  );
}

export default App;
