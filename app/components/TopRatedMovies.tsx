"use client";

import Image from "next/image";
import MovieCard from "./MovieCard";
import rightIcon from "../icons/rightIcon.svg";
import { useEffect, useState } from "react";
import { Movie, URL } from "../constant";
import Spinner from "./Spinner";

const TopRatedMovies = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [errror, setError] = useState("");
  const [topRatedMovies, setTopRateMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const getTopRatedMovies = async () => {
      setIsLoading(true);

      const res = await fetch(
        `${URL}/top_rated?api_key=${process.env.NEXT_PUBLIC_API_KEY}`
      );

      const data = await res.json();

      if (!res.ok) {
        console.log(data.status_message);
        setError(data.status_message);
        setIsLoading(false);
        return;
      }

      setTopRateMovies(data.results.slice(0, 10));
      setIsLoading(false);
    };

    getTopRatedMovies();
  }, []);
  return (
    <section className="py-8 px-4 md:px-12 lg:px-16">
      <div className="flex justify-between items-center">
        <h2 className="font-bold text-2xl my-4">Featured Movie</h2>
        <div className="flex gap-1 items-center cursor-pointer">
          <p className="text-rose">See more</p>
          <Image src={rightIcon} alt="Right icon" />
        </div>
      </div>
      {isLoading ? (
        <Spinner />
      ) : (
        <ul className="movie-list">
          {topRatedMovies.map((movie, index) => (
            <MovieCard key={movie.id.toString()} {...movie} />
          ))}
        </ul>
      )}
    </section>
  );
};

export default TopRatedMovies;
