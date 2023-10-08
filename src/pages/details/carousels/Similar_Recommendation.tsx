import React from 'react'
import { MovieList } from '../../../type/MovieBannerType';
import useFetch from '../../../hooks/useFetch';
import Carousel from '../../../components/carousel/Carousel';
import { title } from 'process';
import { timeLog } from 'console';

type Props = {
    mediaType: string;
    id: string;
    name: 'recommendations' | 'similar';
}

const Similar_Recommendation: React.FC<Props> = ( { mediaType, id, name } ) => {
    
    const { data, loading, error } = useFetch<MovieList>(`/${mediaType}/${id}/${name}`);

    let title;
    if(name === 'similar') title = mediaType === "tv" ? "Similar TV Shows" : "Similar Movies";
    if(name === 'recommendations') title = "Recommendations"

    return (
      <>
        {data?.total_results !== 0 ? 
          <Carousel
          title={title}
          data={data?.results}
          loading={loading}
          endpoint={mediaType}
          /> :
          <>no movie to recommendations</>
        }
      </>
    )
}

export default Similar_Recommendation