import React, { useContext } from 'react';

import { useParams } from "react-router-dom";
import useFetch from '../../hooks/useFetch';
import DetailsBanner from './detailsBanner/DetailsBanner';
import { CreditInfo, VideoInfo } from '../../type/MovieDetailsType';
import Cast from './cast/Cast';
import VideosSection from './videosSection/VideosSection';
import Similar_Recommendation from './carousels/Similar_Recommendation';

type Props = {}

const Details: React.FC<Props> = ( props ) => {
    const { mediaType, id } = useParams();
    const { data, loading } = useFetch<VideoInfo>(`/${mediaType}/${id}/videos`);
    const { data: credits, loading: creditsLoading } = useFetch<CreditInfo>(`/${mediaType}/${id}/credits`);

  return (
    <div>
        <DetailsBanner video={data?.results[0]!} crew={credits?.crew!}/>
        {credits?.cast ? <Cast data={credits?.cast} loading={creditsLoading}/> : <h2 style={{color:'white'}}>no cast found ....</h2>}
        {data ? <VideosSection data={data} loading={loading}/> : <h2 style={{color:'white'}}>no video found ....</h2>}
        {(mediaType && id) && <Similar_Recommendation mediaType={mediaType} id={id} name={'similar'}/>}
        {(mediaType && id) && <Similar_Recommendation mediaType={mediaType} id={id} name={'recommendations'}/>}
    </div>
  )
}

export default Details