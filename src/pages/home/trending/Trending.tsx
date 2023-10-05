import React, { useState } from 'react'
import useFetch from '../../../hooks/useFetch';
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper';
import { tab } from '@testing-library/user-event/dist/tab';
import SwitchTabs from '../../../components/switchTabs/SwitchTabs';
import Carousel from '../../../components/carousel/Carousel';

type Props = {}

const Trending: React.FC<Props> = (props) => {
    const [endpoint, setEndpoint] = useState("day");

    const { data, loading } = useFetch(`/trending/movie/${endpoint}`);

    const onTabChange = (tab: string, index?: number) => {
        setEndpoint(tab === "Day" ? "day" : "week");
    }

    console.log("Trending data : ", data)

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