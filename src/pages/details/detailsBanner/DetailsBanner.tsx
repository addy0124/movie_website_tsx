import React, { useContext } from 'react';

import { useParams } from "react-router-dom";
import dayjs from "dayjs";
import useFetch from '../../../hooks/useFetch';
import Img from '../../../components/lazyLoadImage/Img';
import { MovieDataContext } from '../../../components/context/MovieDataProvider';
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper';
import PosterFallback from "../../../assets/no-poster.png";
import { Details } from '../../../type/MovieDetailsType';
import GenresLable from '../../../components/genres/GenresLable';

import './detailsBannerStyled.scss';

type DetailsBannerProps = {}

const DetailsBanner: React.FC<DetailsBannerProps> = ( props ) => {

    const { mediaType, id } = useParams();
    const { data, loading } = useFetch<Details>(`/${mediaType}/${id}`);

    const { bannerurl } = useContext(MovieDataContext);

    const _genres = data?.genres?.map((g) => g.id);


  return (
    <div className='detailsBanner'>
        {!loading ? 
            (<>
            {!!data && (
                <React.Fragment>
                    <div className='backdrop-img'>
                        <Img src={bannerurl.backdrop + data.backdrop_path}/>
                    </div>
                    <div className="opacity-layer"></div>
                        <ContentWrapper>
                        <div className='content'>
                            {/* left */}
                            <div className='left'>
                            {
                                data.poster_path ? (
                                <Img 
                                    className='posterImg' 
                                    src={bannerurl.backdrop + data.backdrop_path}
                                />
                                ): (
                                <Img
                                    className="posterImg"
                                    src={PosterFallback}
                                />
                                 )
                            }
                            </div>
                            {/* right */}
                            <div className='right'>
                                <div className='title'>
                                {`${
                                     data.name || data.title
                                    } (${dayjs(
                                        data?.release_date
                                    ).format("YYYY")})`}
                                </div>
                                <div className='subtitle'>
                                    {data.tagline}
                                </div>
                                <GenresLable data={_genres!} />

                                <div className='row'>

                                </div>
                            </div>
                        </div>
                        </ContentWrapper>
                </React.Fragment>
            )}
            </>) 
            : (<></>)}

        

    </div>
  )
}

export default DetailsBanner