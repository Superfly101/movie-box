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
      <nav className="py-12 pl-4 min-h-screen min-w-[12rem] border border-[#0000004D] rounded-tr-[3rem] rounded-br-[3rem] text-sm">
        <div className="flex gap-4 items-center">
          <Image src={logo} alt="Movie box logo" />
          <p className="font-bold text-lg">MovieBox</p>
        </div>
        <ul className="flex flex-col pt-8 gap-4">
          <li className="flex gap-2 pl-6 py-5 items-center">
            <Image src={homeIcon} alt="home icon" />
            <p>Home</p>
          </li>
          <li className="flex gap-2 pl-6 py-5 items-center bg-[#BE123C1A] font-[600] text-rose border-r-4 border-rose">
            <Image src={movieIcon} alt="movie icon" /> <p>Movie</p>
          </li>
          <li className="flex gap-2 pl-6 py-5 items-center">
            <Image src={seriesIcon} alt="series icon" /> <p>TV Series</p>
          </li>
          <li className="flex gap-2 pl-6 py-5 items-center">
            <Image src={calendarIcon} alt="calendar icon" /> <p>Upcoming</p>
          </li>
        </ul>

        <div className="my-4 flex flex-col items-center gap-2 pt-8 pb-4 px-2 text-sm mr-4 border border-[#BE123CB2] rounded-xl bg-[#be123d1d]">
          <p className="font-[600]">Play movie quizes and earn free tickets</p>
          <p className="text-xs">50k people are playing now</p>
          <button className="px-4 py-2 font-[500] text-rose text-xs rounded-full bg-[#BE123C33]">
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
