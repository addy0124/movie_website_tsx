import React, { useContext, useState, useEffect } from 'react'

import useFetch from '../../../hooks/useFetch';
import { MovieDataContext } from '../../../components/context/MovieDataProvider';
import Img from '../../../components/lazyLoadImage/Img';
import './heroBanner.scss';
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper';
import { useNavigate } from "react-router-dom";
import { Movie, MovieList } from '../../../type/MovieBannerType';

type Props = {}

const HeroBanner: React.FC<Props> = (Props) => {
    const [background, setBackground] = useState<string>("");
    const [query, setQuery] = useState<string>("");
    const { bannerurl } = useContext(MovieDataContext);
    const { data, loading } = useFetch<MovieList>("/movie/upcoming");

    const navigate = useNavigate();

    useEffect(() => {
        const bg =
            bannerurl.backdrop +
            data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path;
        setBackground(bg);
    }, [data]);

    const searchQueryHandler = (event:React.KeyboardEvent<HTMLInputElement>) => {
        if(event.key === 'Enter' && query.length > 0){
            navigate(`/search/${query}`);
        }
    };

  return (
    <div className='heroBanner'>
        {!loading && (
            <div className="backdrop-img">
                <Img src={background} />
            </div>
        )}
        <div className="opacity-layer"></div>
        <ContentWrapper>
            <div className="heroBannerContent">
                <span className='title'>Welcome . </span>
                <span className='subTitle'>
                    Millions of movies, TV shows and people to discover.
                    Explore now.
                </span>
                <div className="searchInput">
                    <input 
                        type='text'
                        placeholder='Search for a movie or tv show....'
                        onChange={(e)=>setQuery(e.target.value)}
                        onKeyUp={searchQueryHandler}
                    />
                    <button>Search</button>
                </div>

            </div>
        </ContentWrapper>
    </div>
  )
}

export default HeroBanner