import Image from "next/image";
import MovieCard from "./MovieCard";

const TopRatedMovies = () => {
  return (
    <section className="py-8 px-4 md:px-12 lg:px-16">
      <h2 className="font-bold text-2xl">Featured Movie</h2>
      <ul className="movie-list">
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
      </ul>
    </section>
  );
};

export default TopRatedMovies;
