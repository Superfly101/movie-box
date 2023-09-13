import Image from "next/image";
import MovieCard from "./MovieCard";
import rightIcon from "../icons/rightIcon.svg";

const TopRatedMovies = () => {
  return (
    <section className="py-8 px-4 md:px-12 lg:px-16">
      <div className="flex justify-between items-center">
        <h2 className="font-bold text-2xl my-4">Featured Movie</h2>
        <div className="flex gap-1 items-center cursor-pointer">
          <p className="text-rose">See more</p>
          <Image src={rightIcon} alt="Right icon" />
        </div>
      </div>
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
