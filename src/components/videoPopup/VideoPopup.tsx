import React from 'react';

import './videoPopupStyled.scss';
import ReactPlayer from 'react-player';

type VideoPopupProps = {
    show: boolean;
    handleVideoPopUp: (show: boolean, id: string) => void;
    videoId: string;
}

const VideoPopup: React.FC<VideoPopupProps> = ({ show, handleVideoPopUp, videoId }) => {

  return (
    <div className={`videoPopup ${show ? "visible" : ""}`} >
      <div className='opacityLayer' onClick={()=>handleVideoPopUp(false, '')}></div>
        <div className='videoPlayer' onClick={()=>handleVideoPopUp(false, '')}>
          <span className='closeBtn'>
            Close
          </span>
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${videoId}`} 
            controls
            width='100%'
            height='100%'
            //playing={true}
          />
        </div>
    </div>
  )
}

export default VideoPopup