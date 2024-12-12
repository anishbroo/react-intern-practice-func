import React, { useEffect, useState } from "react";
import axios from "axios";

interface Movies {
  id: number;
  url: string;
  title: string;
}

const FetchingUsingGetMethod: React.FC = () => {
  const [movies, setMovies] = useState<Movies[]>([]); //to store fetch movie data

  const [loading, setLoading] = useState<boolean>(true); //state for loading

  const [error, setError] = useState<string>(""); //state for errors

  useEffect(() => {
    axios
      .get("https://yts.mx/api/v2/list_movies.json?quality=3D/limit")
      .then((response) => {
        console.log(response.data.data.movies);

        setMovies(response.data.data.movies); //response data store garcha
        setLoading(false); //error handle garne
      })

      .catch((error) => {
        setError("Failed to load data"); //error message dincha
        setLoading(false); //handles error
      });
  }, []); //ekchoti run huncha when component mounts

  //rendering loading and error
  if (loading) {
    return <div>Loading....</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h2>Fetching through GET Method</h2>
      <h4>Movies list</h4>
      <ul>
        {movies?.length > 0 &&
          movies?.map((movie) => <li key={movie.id}>{movie.title}</li>)}
      </ul>
    </div>
  );
};

export default FetchingUsingGetMethod;
