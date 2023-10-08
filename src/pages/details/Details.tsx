import React, { useContext } from 'react';

import { useParams } from "react-router-dom";
import useFetch from '../../hooks/useFetch';
import DetailsBanner from './detailsBanner/DetailsBanner';

type Props = {}

const Details: React.FC<Props> = ( props ) => {
    const { mediaType, id } = useParams();
    const { data, loading } = useFetch<any>(`/${mediaType}/${id}/videos`);

  return (
    <div>
        <DetailsBanner />
    </div>
  )
}

export default Details