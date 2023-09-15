"use client";

import { useEffect, useState } from "react";
import { Movie } from "../constant";
import MovieCard from "../components/MovieCard";
import { useSearchParams } from "next/navigation";
import Spinner from "../components/Spinner";
import MainHeader from "../components/MainHeader";

export default function Page() {
  const [isLoading, setIsLoading] = useState(false);
  const [searchResult, setSearchResult] = useState<Movie[]>();

  const searchParams = useSearchParams();
  const query = searchParams.get("query");

  const url = "https://api.themoviedb.org/3/search/movie";

  useEffect(() => {
    const getSearchResult = async () => {
      setIsLoading(true);

      const res = await fetch(
        `${url}?query=${query}&api_key=${process.env.NEXT_PUBLIC_API_KEY}`
      );

      const data = await res.json();

      if (!res.ok) {
        console.log(res);
        setIsLoading(false);
        return;
      }

      setIsLoading(false);
      setSearchResult(data.results);
    };

    getSearchResult();
  }, [query]);

  return (
    <>
      <MainHeader isHack={true} />
      <section className="py-8 px-4 md:px-12 lg:px-16">
        <h2 className="text-xl font-bold">Your Search Results for: {query}</h2>
        {isLoading ? (
          <Spinner text="Searching..." />
        ) : (
          <ul className="movie-list">
            {searchResult?.map((movie) => (
              <MovieCard key={movie.id.toString()} {...movie} />
            ))}
          </ul>
        )}
        {!isLoading && searchResult?.length === 0 ? (
          <p className="text-center font-bold">No Results</p>
        ) : null}
      </section>
    </>
  );
}
