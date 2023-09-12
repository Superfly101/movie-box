import Image from "next/image";
import IMDbLogo from "../icons/IMDb.png";
import tomatoIcon from "../icons/tomato.png";

const HeroSection = () => {
  return (
    <section
      className="min-h-[calc(100vh-40px)] bg-cover flex items-center px-4 md:px-12 lg:px-16"
      style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/original/ctMserH8g2SeOAnCw5gFjdQF8mo.jpg")`,
      }}
    >
      <article className=" text-white max-w-[20rem]">
        <h2 className="font-bold text-4xl">John Wick 3: Parabellum</h2>
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
          <p>
            John Wick is on the run after killing a member of the international
            assassins' guild, and with a $14 million price tag on his head, he
            is the target of hit men and women everywhere.
          </p>
        </div>
      </article>
    </section>
  );
};

export default HeroSection;
