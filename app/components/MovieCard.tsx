import Image from "next/image";

const MovieCard = () => {
  return (
    <li>
      <div>
        <Image
          src="https://image.tmdb.org/t/p/original/lyQBXzOQSuE59IsHyhrp0qIiPAz.jpg"
          alt="Movie poster"
          width={500}
          height={700}
        />
      </div>
      <div className="py-2 flex flex-col gap-2 mt-2">
        <h4 className="font-bold">Spider-Man : Into The Spider Verse</h4>
        <p className="text-sm">Release on: 2023-07-19</p>
      </div>
    </li>
  );
};

export default MovieCard;
