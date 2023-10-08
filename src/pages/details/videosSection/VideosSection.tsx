import React, { useState } from 'react';

import { VideoInfo } from '../../../type/MovieDetailsType';
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper';
import Img from '../../../components/lazyLoadImage/Img';
import PlayIcon from '../Playbtn';

import './videosSectionStyled.scss';
import VideoPopup from '../../../components/videoPopup/VideoPopup';

type VideosSectionProps = {
    data: VideoInfo | null;
    loading: string | boolean;
}

const VideosSection: React.FC<VideosSectionProps> = ({ data, loading}) => {
    const [show, setShow] = useState(false);
    const [videoId, setVideoId] = useState('');

    const handleVideoPopUp = (show: boolean, id: string) => {
        setShow(show);
        setVideoId(id);
    };

  return (
    <div className='videosSection'>
        <ContentWrapper>
            <div className='sectionHeading'>Official Videos</div>
            {
                !loading ? (
                <div className='videos'>
                    {data?.results?.map((video) => (
                        <div
                            key={video.id}
                            className='videoItem'
                            onClick={()=>handleVideoPopUp(true, video.key)}
                        >
                            <div className='videoThumbnail'>
                                <Img 
                                    src={`https://img.youtube.com/vi/${video.key}/mqdefault.jpg`}
                                />
                                <PlayIcon />
                            </div>
                            <div className="videoTitle">{video.name}</div>
                        </div>
                    ))}
                </div>
                ) : (
                <div></div>)
            }
        </ContentWrapper>
        <VideoPopup
                show={show}
                handleVideoPopUp={setShow}
                videoId={videoId}
            />

    </div>
  )
}

export default VideosSection