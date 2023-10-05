import React, { ReactNode, useState } from 'react'

type MovieDataContextProps = {
  children: ReactNode;
}

type Url = {
  backdrop: string,
  poster: string,
  profile: string
}

export type Genres = {
  id:number,
  name:string
}

type MovieDataContext ={
  bannerurl: Url;
  getBannerurl: (url: Url)=> void;
  genres: Genres[];
  getGenres: (data: Genres[]) => void;
}

export const MovieDataContext = React.createContext<MovieDataContext>({} as MovieDataContext);

export const MovieDataProvider = ({children} : MovieDataContextProps) => {
  const [bannerurl, setBannerurl] = useState<Url>({backdrop: '', poster:'', profile:''});
  const [genres, setGenresl] = useState<Genres[]>([{id:0 , name:''}]);

  const getBannerurl = (url: Url) =>{
    setBannerurl(url)
  }

  const getGenres = (data: Genres[]) =>{
    setGenresl(data)
  }

 
return (
  <MovieDataContext.Provider value={{bannerurl, getBannerurl, genres, getGenres}}>
      {children}
  </MovieDataContext.Provider>
)
}