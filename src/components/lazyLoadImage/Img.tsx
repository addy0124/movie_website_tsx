import React from 'react'

import { LazyLoadImage } from 'react-lazy-load-image-component';
import "react-lazy-load-image-component/src/effects/blur.css";

type ImgProps = {
    src:string,
    className?:any
}

const Img: React.FC<ImgProps> = (img) => {
  return (
    <LazyLoadImage 
        className={img.className || ""}
        alt=''
        effect='blur'
        src={img.src}
    />
  )
}

export default Img