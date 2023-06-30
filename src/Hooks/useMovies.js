import { useState } from "react";
import { searchMovies } from "../services/movies";

export function useMovies({ search }) {
  const [movies, setMovies] = useState([]);

  const getMovies = async ({ search }) => {
    const moviesResponse = await searchMovies({ search });
    setMovies(moviesResponse);
  };

  return { movies, getMovies };
}
