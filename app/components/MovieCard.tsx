import Image from "next/image";
import { useRouter } from "next/navigation";

type CardProps = {
  id: Number;
  original_title: string;
  overview: string;
  poster_path: string;
  backdrop_path: string;
  release_date: string;
};

const MovieCard = ({
  id,
  poster_path,
  original_title,
  release_date,
}: CardProps) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/movies/${id}`);
  };
  return (
    <li>
      <div className="cursor-pointer" onClick={handleClick}>
        <Image
          src={`https://image.tmdb.org/t/p/original/${poster_path}`}
          alt="Movie poster"
          width={500}
          height={700}
        />
      </div>
      <div className="py-2 flex flex-col gap-2 mt-2">
        <h4 className="font-bold cursor-pointer" onClick={handleClick}>
          {original_title}
        </h4>
        <p className="text-sm">Release on: {release_date}</p>
      </div>
    </li>
  );
};

export default MovieCard;
