import React, { useContext } from 'react';

import ContentWrapper from '../../../components/contentWrapper/ContentWrapper';
import { Actor_Crew_Info } from '../../../type/MovieDetailsType';
import { MovieDataContext } from '../../../components/context/MovieDataProvider';
import avatar from "../../../assets/avatar.png";
import Img from '../../../components/lazyLoadImage/Img';

import './castStyled.scss';

type CastProps = {
    data: Actor_Crew_Info[];
    loading: string | boolean;
}

const Cast: React.FC<CastProps> = ({ data, loading } ) => {
    const { bannerurl } = useContext(MovieDataContext);
    
    const skeleton = () => {
        return (
            <div className='skItem'>
                <div className='circle skeleton'></div>
                <div className='row skeleton'></div>
                <div className='row2 skeleton'></div>
            </div>
        )
    }

    return (
        <div className='castSection'>
            <ContentWrapper>
                <div className='sectionHeading'>Top Cast</div>
                {!loading ? (
                <div className='listItems'>
                    {data?.map((item) => {
                            let imgUrl = item.profile_path ? 
                            bannerurl.profile + item.profile_path 
                            : 
                            avatar;
                        return (
                            <div key={item.id} className='listItem'>
                                <div className='profileImg'>
                                    <Img src={imgUrl} />
                                </div>
                                <div className='name'>{item.name}</div>
                                <div className='character'>
                                    {item.character}
                                </div>
                            </div>
                        );
                    })}
                </div>
                ) : (
                    <div className='castSkeleton'>
                        {skeleton()}
                        {skeleton()}
                        {skeleton()}
                        {skeleton()}
                        {skeleton()}
                        {skeleton()}
                    </div>
                )}

            </ContentWrapper>
        </div>
    )
}

export default Cast