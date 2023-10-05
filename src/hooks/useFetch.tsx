import React, { useEffect, useState } from 'react'
import { fetchDataFromApi } from '../components/utils/api'
import { MovieList, initialMovieList } from '../type/MovieBannerType';

const useFetch = (url: string) => {
    const [data, setData] = useState<any>('');
    const [loading, setLoading] = useState<string|boolean>('');
    const [error, setError] = useState<string>('');

    useEffect(() => {
        setLoading("loading...");
        setData(initialMovieList);
        setError('');

        fetchDataFromApi(url)
            .then((res) => {
                setLoading(false);
                setData(res);
            })
            .catch((err) => {
                setLoading(false);
                setError("Something went wrong!");
            });
    }, [url]);

  return { data, loading, error };
};

export default useFetch;