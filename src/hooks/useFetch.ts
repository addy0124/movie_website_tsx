import React, { useEffect, useState } from 'react'
import { fetchDataFromApi } from '../components/utils/api'
import { MovieList, initialMovieList } from '../type/MovieBannerType';

const useFetch = <T>(url: string) => {
    const [data, setData] = useState<T | null>();
    const [loading, setLoading] = useState<string|boolean>('');
    const [error, setError] = useState<string>('');

    useEffect(() => {
        setLoading("loading...");
        setData(null);
        setError('');

        fetchDataFromApi<T>(url)
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