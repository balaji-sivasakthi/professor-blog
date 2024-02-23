import React, { useEffect, useState } from 'react';

interface FetchState {
    error: unknown;
    loading: boolean;
    data: { data: { attributes: any } } | undefined;
}

const useFetch = (url: string): FetchState => {
    const [error, setError] = useState<unknown>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [data, setData] = useState<{ data: { attributes: any } } | undefined>(undefined);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const res = await fetch(url);
                const json = await res.json();
                setData(json);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [url]);

    return {
        error,
        loading,
        data,
    };
};

export default useFetch;
