import React from 'react';
import HeroBanner from './heroBanner/HeroBanner';
import Trending from './trending/Trending';

import './homeStyled.scss';

type Props = {}

const Home = (props: Props) => {
  return (
    <div>
        <HeroBanner />
        <Trending />
    </div>
  )
}

export default Home