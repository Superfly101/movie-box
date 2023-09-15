import Image from "next/image";
import { useRouter } from "next/navigation";
import { Movie } from "../constant";

// type CardProps = {
//   id: Number;
//   original_title: string;
//   overview: string;
//   poster_path: string;
//   backdrop_path: string;
//   release_date: string;
// };

const MovieCard = ({
  id,
  poster_path,
  original_title,
  release_date,
}: Movie) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/movies/${id}`);
  };
  return (
    <li data-testid="movie-card">
      <div className="cursor-pointer" onClick={handleClick}>
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
