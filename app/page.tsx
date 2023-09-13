import HeroSection from "./components/HeroSection";
import MainHeader from "./components/MainHeader";
import TopRatedMovies from "./components/TopRatedMovies";

export default function Home() {
  return (
    <>
      {/* <MainHeader /> */}
      <main>
        <HeroSection />
        <TopRatedMovies />
      </main>
    </>
  );
}
