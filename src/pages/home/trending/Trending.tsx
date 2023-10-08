import React, { useState } from 'react'
import useFetch from '../../../hooks/useFetch';
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper';
import SwitchTabs from '../../../components/switchTabs/SwitchTabs';
import Carousel from '../../../components/carousel/Carousel';
import { MovieList } from '../../../type/MovieBannerType';

type TrendingProps = {}

const Trending: React.FC<TrendingProps> = (props) => {
    const [endpoint, setEndpoint] = useState("day");

    const { data, loading } = useFetch<MovieList>(`/trending/movie/${endpoint}`);

    const onTabChange = (tab: string, index?: number) => {
        setEndpoint(tab === "Day" ? "day" : "week");
    }

  return (
    <div className='carouselSection'>
        <ContentWrapper>
            <span className='carouselTitle'>Trending</span>
            <SwitchTabs data={["Day", "Week"]} onTabChange={onTabChange} />
        </ContentWrapper>
        <Carousel data={data?.results} loading={loading} />
    </div>
  )
}

export default Trending