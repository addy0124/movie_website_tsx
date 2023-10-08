import { Genres, MovieInfo } from "./MovieBannerType";

export type production_companies = {
    id: number,
    logo_path: string,
    name: string,
    origin_country: string
}

export type production_countries = {
    iso_3166_1: string,
    name: string
}

export type spoken_languages = {
    english_name: string,
    iso_639_1: string,
    name: "string"
}

export type BasicDetails = {
    name:string
    belongs_to_collection : null,
    budget : number,
    genres: Genres[],
    homepage: string,
    imdb_id: string,
    production_companies: production_companies[],
    production_countries: production_countries[],
    revenue: number,
    runtime: number,
    spoken_languages: spoken_languages[],
    status: string,
    tagline: string,
}

export type Details = BasicDetails & MovieInfo;

