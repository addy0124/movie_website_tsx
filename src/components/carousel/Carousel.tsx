import React, { useContext, useRef } from 'react';

import ContentWrapper from '../contentWrapper/ContentWrapper';
import PosterFallback from "../../assets/no-poster.png";
import { MovieDataContext } from '../context/MovieDataProvider';
import { Movie } from '../../type/MovieBannerType';
import Img from '../lazyLoadImage/Img';
import CircleRating from '../circleRating/CircleRating';
import { useNavigate } from "react-router-dom";
import {
    BsFillArrowLeftCircleFill,
    BsFillArrowRightCircleFill,
} from "react-icons/bs";


import './carouselStyled.scss';
import GenresLable from '../genres/GenresLable';
import dayjs from 'dayjs';

type Carouselprops = {
    data: any,
    loading: string|boolean,
    endpoint?: string,
    title?: string
}

const Carousel: React.FC<Carouselprops> = ({ data, loading, endpoint, title }) => {
    const carouselContainer = useRef<HTMLDivElement>(null);
    const { bannerurl } = useContext(MovieDataContext);
    const navigate = useNavigate();

    const navigation = (dir: "left" | "right") => {
        const container = carouselContainer.current;
        
        if (container) {
          const scrollAmount =
            dir === "left"
              ? container.scrollLeft - (container.offsetWidth + 20)
              : container.scrollLeft + (container.offsetWidth + 20);

          container.scrollTo({
            left: scrollAmount,
            behavior: "smooth",
          });
        }
    };

    const skItem = () => {
        return (
            <div className='skeletonItem'>
                <div className='posterBlock skeleton'></div>
                <div className="textBlock">
                    <div className="title skeleton"></div>
                    <div className="date skeleton"></div>
                </div>
            </div>
        )
    }


  return (
    <div className='carousel'>
        <ContentWrapper>
        {title && <div className="carouselTitle">{title}</div>}
        <BsFillArrowLeftCircleFill 
            className="carouselLeftNav arrow"
            onClick={() => navigation("left")}
        />
        <BsFillArrowRightCircleFill 
            className="carouselRighttNav arrow"
            onClick={() => navigation("right")}
        />
            {!loading ? (
                <div className="carouselItems" ref={carouselContainer}>
                    {data?.map((item:Movie)=>{
                          const posterUrl = item.poster_path
                          ? bannerurl.poster + item.poster_path
                          : PosterFallback;

                          return (
                            <div key={item.id} className="carouselItem"
                                onClick={() =>
                                    navigate(
                                        `/${item?.media_type || endpoint}/${
                                            item.id
                                        }`
                                    )
                                }
                            >
                                <div className="posterBlock">
                                    <Img src={posterUrl} />
                                    <CircleRating rating={item.vote_average.toFixed(1)}/>
                                    <GenresLable data={item.genre_ids!.slice(0,2)} />
                                </div>
                                <div className='textBlock'>
                                    <span className='title'>
                                        {item.title || item?.name }
                                    </span>
                                    <span className='data'>
                                        {dayjs(item.release_date || item?.first_air_date).format("MMM D, YYYY")}
                                    </span>

                                </div>

                            </div>
                          )
                    })}
                </div>
            ): 
            <div className='loadingSkeleton'>
               {skItem()}
               {skItem()}
               {skItem()}
               {skItem()}
               {skItem()}
            </div>
            }
        </ContentWrapper>
    </div>
  )
}

export default Carousel