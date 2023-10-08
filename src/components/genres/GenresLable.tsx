import React, { useContext } from 'react'
import { MovieDataContext } from '../context/MovieDataProvider';

import './genresStyled.scss';
import { Genres } from '../../type/MovieBannerType';

type GenresProps = {
  data: number[]; 
}

const GenresLable: React.FC<GenresProps> = ({ data }) => {
  const { genres } = useContext(MovieDataContext);

  const filteredGenres: Genres[] = genres.filter((genre) => data.includes(genre.id));

  return (
    <div className='genres'>
      {filteredGenres?.map((g:Genres)=>
        (
          <div key={g.id} className="genre">
            {g.name}
          </div>
        )    
      )}
    </div>
  )
}

export default GenresLable