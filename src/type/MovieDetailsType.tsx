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
    created_by:any
}

//for credits
export type Actor_Crew_Info = {
    adult: boolean,
    gender: number,
    id: number,
    known_for_department: string,
    name: string,
    original_name: string,
    popularity: number,
    profile_path: string,
    cast_id?: number,
    character?: string,
    credit_id: string,
    order?: number,
    department?: string;
    job?: string;
}

//for video
export type VideoResult = {
    iso_639_1: string;
    iso_3166_1: string;
    name: string;
    key: string;
    site: string;
    size: number;
    type: string;
    official: boolean;
    published_at: string;
    id: string;
};

export type Details = BasicDetails & MovieInfo;

export type CreditInfo = {
    id: number,
    cast?: Actor_Crew_Info[]
    crew?: Actor_Crew_Info[]
}

export type VideoInfo = {
    id: number;
    results: VideoResult[];
};


