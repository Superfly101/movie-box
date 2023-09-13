import { URL, imageUrl } from "@/app/constant";
import Image from "next/image";
import { notFound } from "next/navigation";

export default async function Page({ params }: { params: { id: string } }) {
  const res = await fetch(
    `${URL}/${params.id}?api_key=${process.env.NEXT_PUBLIC_API_KEY}`
  );

  const data = await res.json();

  if (!res.ok) {
    console.log(data);
    notFound();
  }

  return (
    <section className="px-8 py-8">
      <div className="overflow-hidden rounded-lg">
        <Image
          src={`${imageUrl}/${data.poster_path}`}
          alt={data.title}
          width={1200}
          height={700}
          className="w-full"
        />
      </div>
    </section>
  );
}
