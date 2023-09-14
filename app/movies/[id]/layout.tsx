import Image from "next/image";
import logo from "/public/logo.svg";
import homeIcon from "../../icons/home-icon.png";
import movieIcon from "../../icons/movie-icon.png";
import seriesIcon from "../../icons/tvshow-icon.png";
import calendarIcon from "../../icons/calendar-icon.png";
import logoutIcon from "../../icons/logout-icon.png";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export default function MovieLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className={`flex ${poppins.className}`}>
      <nav className="py-12 pl-4 min-h-screen w-[20rem] border border-[#0000004D] rounded-tr-[3rem] rounded-br-[3rem]">
        <div className="flex gap-4 items-center">
          <Image src={logo} alt="Movie box logo" />
          <p className="font-bold">MovieBox</p>
        </div>
        <ul className="flex flex-col pt-16 gap-4">
          <li className="flex gap-2 pl-6 py-5">
            <Image src={homeIcon} alt="home icon" />
            Home
          </li>
          <li className="flex gap-2 pl-6 py-5 bg-[#BE123C1A] font-[600] text-rose border-r-4 border-rose">
            <Image src={movieIcon} alt="movie icon" /> Movie
          </li>
          <li className="flex gap-2 pl-6 py-5">
            <Image src={seriesIcon} alt="series icon" /> TV Series
          </li>
          <li className="flex gap-2 pl-6 py-5">
            <Image src={calendarIcon} alt="calendar icon" /> Upcoming
          </li>
        </ul>

        <div className="pt-8 pb-4 px-1 text-sm mr-4 border border-[#BE123CB2] rounded-xl bg-[#be123d1d]">
          <p className="font-[600]">Play movie quizes and earn free tickets</p>
          <p>50k people are playing now</p>
          <button className="font-[500] text-rose rounded-full">
            Start playing
          </button>
        </div>

        <div className="flex gap-2">
          <Image src={logoutIcon} alt="logout icon" /> <p>Log out</p>
        </div>
      </nav>
      {children}
    </section>
  );
}
