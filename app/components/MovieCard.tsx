import Image from "next/image";

type CardProps = {
  id: Number;
  original_title: string;
  overview: string;
  poster_path: string;
  backdrop_path: string;
  release_date: string;
};

const MovieCard = ({
  poster_path,
  overview,
  original_title,
  release_date,
}: CardProps) => {
  return (
    <li>
      <div>
        <Image
          src={`https://image.tmdb.org/t/p/original/${poster_path}`}
          alt="Movie poster"
          width={500}
          height={700}
        />
      </div>
      <div className="py-2 flex flex-col gap-2 mt-2">
        <h4 className="font-bold">{original_title}</h4>
        <p className="text-sm">Release on: {release_date}</p>
      </div>
    </li>
  );
};

export default MovieCard;
