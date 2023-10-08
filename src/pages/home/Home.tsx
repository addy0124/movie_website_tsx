import React from 'react';
import HeroBanner from './heroBanner/HeroBanner';
import Trending from './trending/Trending';
import Popular from './popular/Popular';

import './homeStyled.scss';
import TopRated from './topRated/TopRated';

type Props = {}

const Home = (props: Props) => {
  return (
    <div className="homePage">
        <HeroBanner />
        <Trending />
        <Popular />
        <TopRated />
    </div>
  )
}

export default Home