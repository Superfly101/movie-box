import Image from "next/image";
import { useRouter } from "next/navigation";
import { Movie } from "../constant";
import { useState } from "react";

const MovieCard = ({
  id,
  poster_path,
  original_title,
  release_date,
}: Movie) => {
  const router = useRouter();
  const [isFavorite, setIsFavorite] = useState(false);

  const handleClick = () => {
    router.push(`/movies/${id}`);
  };
  return (
    <li data-testid="movie-card">
      <div className="cursor-pointer relative" onClick={handleClick}>
        <div
          className={`absolute w-8 p-1.5 top-4 right-4 ${
            isFavorite ? "bg-[#f3b0b0]" : "bg-[#F3F4F680]"
          } rounded-full cursor-pointer`}
          onClick={(e) => {
            e.stopPropagation();
            setIsFavorite((prev) => !prev);
          }}
        >
          <svg
            className={`w-full ${
              isFavorite ? "fill-[#f00]" : "fill-[#D1D5DB]"
            }  `}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path d="M256 448a32 32 0 01-18-5.57c-78.59-53.35-112.62-89.93-131.39-112.8-40-48.75-59.15-98.8-58.61-153C48.63 114.52 98.46 64 159.08 64c44.08 0 74.61 24.83 92.39 45.51a6 6 0 009.06 0C278.31 88.81 308.84 64 352.92 64c60.62 0 110.45 50.52 111.08 112.64.54 54.21-18.63 104.26-58.61 153-18.77 22.87-52.8 59.45-131.39 112.8a32 32 0 01-18 5.56z" />
          </svg>
        </div>
        <Image
          src={`https://image.tmdb.org/t/p/original/${poster_path}`}
          alt="Movie poster"
          width={500}
          height={700}
          data-testid="movie-poster"
        />
      </div>
      <div className="py-2 flex flex-col gap-2 mt-2">
        <p data-testid="movie-release-date" className="text-sm">
          {release_date}
        </p>
        <h4
          data-testid="movie-title"
          className="font-bold cursor-pointer"
          onClick={handleClick}
        >
          {original_title}
        </h4>
      </div>
    </li>
  );
};

export default MovieCard;
