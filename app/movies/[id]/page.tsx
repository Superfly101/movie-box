import { Movie, URL, imageUrl } from "@/app/constant";
import Image from "next/image";
import { notFound } from "next/navigation";
import starIcon from "../../icons/star-icon.png";
import Trailer from "@/app/components/Trailer";

async function getData(id: string) {
  const res = await fetch(
    `${URL}/${id}?api_key=${process.env.NEXT_PUBLIC_API_KEY}`
  );

  if (!res.ok) {
    console.log(res);
    notFound();
  }

  return res.json();
}

export default async function Page({ params }: { params: { id: string } }) {
  const data: Movie = await getData(params.id);

  const hours = Math.floor(data.runtime / 60);
  const minutes = data.runtime % 60;
  const runtime = `${hours}hr ${minutes}m`;

  function formatNumber(num: number) {
    return Math.abs(num) > 999
      ? Math.sign(num) * Number((Math.abs(num) / 1000).toFixed(1)) + "k"
      : Math.sign(num) * Math.abs(num);
  }

  return (
    <section className={`px-8 py-8`}>
      <Trailer id={params.id} />
      <article className="flex py-4 flex-col gap-2">
        <div className="flex items-justify justify-between gap-4 my-2">
          <div className="flex gap-4">
            <h2 className="text-xl">
              {data.original_title} &#183; {data.release_date.slice(0, 4)}{" "}
              &#183; {runtime}
            </h2>
            <ul className="flex gap-2 items-center">
              {data.genres.map((genre) => (
                <li
                  key={`${genre.id}`}
                  className="border border-[#F8E7EB] rounded-full py-1 px-2 text-sm font-[500] text-rose"
                >
                  {genre.name}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex gap-2 items-center">
            <Image src={starIcon} alt="star icon" />
            {data.vote_average.toFixed(1)} | {formatNumber(data.vote_count)}
          </div>
        </div>
        <p>{data.overview}</p>
        <p>
          Director:{" "}
          <span className="text-rose cursor-pointer hover:underline">
            Joseph Konsinski
          </span>
        </p>
        <p>
          Writers:{" "}
          <span className="text-rose cursor-pointer hover:underline">
            Jim Cash, Jack Epps Jr, Peter Craig
          </span>
        </p>
        <p>
          Stars :{" "}
          <span className="text-rose cursor-pointer hover:underline">
            Tom Cruise, Jennifer Connelly, Miles Teller
          </span>
        </p>
      </article>
    </section>
  );
}
