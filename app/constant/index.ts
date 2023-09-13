export const URL = "https://api.themoviedb.org/3/movie";

export type Movie = {
  id: Number;
  original_title: string;
  overview: string;
  poster_path: string;
  backdrop_path: string;
  release_date: string;
};
