"use client";

import { useEffect, useState } from "react";
import { Trailer, URL } from "../constant";
import Spinner from "./Spinner";

type TrailerProps = {
  id: string;
};
const Trailer = ({ id }: TrailerProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [trailerKey, setTrailerKey] = useState<string | null>(null);

  useEffect(() => {
    const getTrailer = async () => {
      setIsLoading(true);

      const res = await fetch(
        `${URL}/${id}/videos?api_key=${process.env.NEXT_PUBLIC_API_KEY}`
      );

      const data = await res.json();

      if (!res.ok) {
        console.log(res);
        setIsLoading(false);
        return;
      }

      setIsLoading(false);

      const trailers: Trailer[] = data.results.filter(
        (result: Trailer) => result.type === "Trailer"
      );

      setError("");
      setTrailerKey(trailers[0].key);
    };

    getTrailer();
  }, []);
  return isLoading ? (
    <Spinner text="Getting trailer" />
  ) : (
    <div className="overflow-hidden rounded-lg max-h-[25rem]">
      <iframe
        src={`https://www.youtube.com/embed/${trailerKey}`}
        className="w-full h-[30rem]"
      ></iframe>
    </div>
  );
};

export default Trailer;
