export type Movie = {
    adult: boolean;
    backdrop_path: string;
    genre_ids: number[];
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
  };
  
  type Dates = {
    maximum: string;
    minimum: string;
  };
  
  export type MovieList = {
    dates: Dates;
    page: number;
    results: Movie[];
    total_pages: number;
    total_results: number;
  };

  export const initialMovieList: MovieList = {
    dates: {
      maximum: '',
      minimum: '',
    },
    page: 0,
    results: [],
    total_pages: 0,
    total_results: 0,
  };