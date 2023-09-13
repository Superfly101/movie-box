import HeroSection from "./components/HeroSection";
import MainHeader from "./components/MainHeader";
import TopRatedMovies from "./components/TopRatedMovies";

export default function Home() {
  return (
    <>
      <main>
        <HeroSection />
        <TopRatedMovies />
      </main>
    </>
  );
}
