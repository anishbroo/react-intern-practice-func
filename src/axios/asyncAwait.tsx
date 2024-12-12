import React, { useEffect, useState } from "react";
import axios from "axios";

interface Movies {
  title: string;
  year: number;
  rating: number;
}

const AsyncAwait: React.FC = () => {
  const [movies, setMovies] = useState<Movies[]>([]);

  const [loading, setLoading] = useState<boolean>(true);

  const [error, setError] = useState<string>("");

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          "https://yts.mx/api/v2/list_movies.json?quality=3D/limit"
        );
        setMovies(response.data);
      } catch (error) {
        setError("Failed to reach data");
      } finally {
        setLoading(false);
      }
    };
    fetchMovies();
  }, []);

  if (loading) {
    return (
      <div>
        <p>Loadingg..........</p>
      </div>
    );
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <h2>Async Await</h2>
      <ul>
        {movies.map((movie, index) => (
          <>
            <li key={index}>{movie.title}</li>
            <li>{movie.year}</li>
          </>
        ))}
      </ul>
    </div>
  );
};

export default AsyncAwait;
