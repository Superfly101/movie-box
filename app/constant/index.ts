export const URL = "https://api.themoviedb.org/3/movie";

export const imageUrl = "https://image.tmdb.org/t/p/original";

export type Movie = {
  id: number;
  original_title: string;
  overview: string;
  poster_path: string;
  backdrop_path: string;
  release_date: string;
  runtime: number;
  vote_average: number;
  vote_count: number;
  genres: Genre[];
};

export type Genre = {
  id: number;
  name: string;
};
