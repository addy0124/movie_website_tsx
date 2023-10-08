import React, { useState } from 'react'
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper'
import SwitchTabs from '../../../components/switchTabs/SwitchTabs'
import useFetch from '../../../hooks/useFetch'
import Carousel from '../../../components/carousel/Carousel'
import { Movie, MovieList } from '../../../type/MovieBannerType'

type TopRatedProps = {}

const TopRated: React.FC<TopRatedProps> = (Props) => {
  const [endpoint, setEndpoint] = useState("movie");

    const { data, loading } = useFetch<MovieList>(`/${endpoint}/top_rated`);

    const onTabChange = (tab: string) => {
        setEndpoint(tab === "Movies" ? "movie" : "tv");
    };

  return (
    <div className='carouselSection'>
      <ContentWrapper>
        <span className='carouselTitle'>Top Rated</span>
        <SwitchTabs data={["Movies", "TV Shows"]} onTabChange={onTabChange}/>
      </ContentWrapper>
      <Carousel data={data?.results} loading={loading} endpoint={endpoint}/>
    </div>
  )
}

export default TopRated