import React from 'react'

import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import './circleRatingStyled.scss';

type CircleRatingProps = {
    rating:string
}

const CircleRating: React.FC<CircleRatingProps> = ({rating}) => {
  return (
    <div className='circleRating'>
        <CircularProgressbar 
            value={Number(rating)}
            maxValue={10}
            text={rating.toString()}
            styles={buildStyles({
                pathColor:
                Number(rating) < 5 ? 'red' : Number(rating) < 7 ? 'orange' : 'green',
            })}
        />
    </div>
  )
}

export default CircleRating;