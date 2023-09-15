import Image from "next/image";
import IMDbLogo from "../icons/IMDb.png";
import tomatoIcon from "../icons/tomato.png";
import playIcon from "../icons/play-icon.png";
import { Movie, URL, imageUrl } from "../constant";
import Link from "next/link";

async function getData() {
  const res = await fetch(
    `${URL}/popular?language=en-US&page=1&api_key=${process.env.NEXT_PUBLIC_API_KEY}`
  );

  if (!res.ok) {
    console.log(res);
    return;
  }

  return res.json();
}

const HeroSection = async () => {
  const result = await getData();
  const data: Movie = result.results[0];

  return (
    <section
      className="min-h-[calc(100vh-40px)] bg-cover flex items-center px-4 md:px-12 lg:px-16"
      style={{
        backgroundImage: `url("${imageUrl}/${data.backdrop_path}")`,
      }}
    >
      <article className=" text-white max-w-[30rem]">
        <h2 className="font-bold text-4xl">{data.original_title}</h2>
        <div className="py-4">
          <div className="flex gap-4 my-2">
            <div className="flex gap-2 items-center">
              <Image src={IMDbLogo} alt="IMDb logo" />
              <p>86.0 / 100</p>
            </div>
            <div className="flex gap-2 items-center">
              <Image src={tomatoIcon} alt="IMDb logo" />
              <p>97%</p>
            </div>
          </div>
          <p>{data.overview}</p>

          <Link
            href={`/movies/${data.id}`}
            className="mt-4 flex gap-1 items-center bg-rose rounded-lg px-4 py-2 font-bold w-fit"
          >
            <Image src={playIcon} alt="play icon" />
            WATCH TRAILER
          </Link>
        </div>
      </article>
    </section>
  );
};

export default HeroSection;
