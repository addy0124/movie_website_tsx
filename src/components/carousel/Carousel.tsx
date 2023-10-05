import React, { useContext } from 'react';

import ContentWrapper from '../contentWrapper/ContentWrapper';
import PosterFallback from "../../assets/no-poster.png";
import { MovieDataContext } from '../context/MovieDataProvider';
import { Movie } from '../../type/MovieBannerType';
import Img from '../lazyLoadImage/Img';
import CircleRating from '../circleRating/CircleRating';


import './carouselStyled.scss';
import GenresLable from '../genres/GenresLable';

type Carouselprops = {
    data:any,
    loading:string|boolean,
    endpoint?:string,
    title?:string
}

const Carousel: React.FC<Carouselprops> = ({ data, loading, endpoint, title }) => {
    const { bannerurl } = useContext(MovieDataContext);

  return (
    <div className='carousel'>
        <ContentWrapper>
            {!loading ? (
                <div className="carouselItems">
                    {data?.map((item:Movie)=>{
                          const posterUrl = item.poster_path
                          ? bannerurl.poster + item.poster_path
                          : PosterFallback;

                          return (
                            <div key={item.id} className="carouselItem">
                                <div className="posterBlock">
                                    <Img src={posterUrl} />
                                    <CircleRating rating={item.vote_average.toFixed(1)}/>
                                    <GenresLable data={item.genre_ids.slice(0,2)} />
                                </div>
                            </div>
                          )


                    })}
                </div>
            ): <div>Loading ...</div>}
        </ContentWrapper>
    </div>
  )
}

export default Carousel