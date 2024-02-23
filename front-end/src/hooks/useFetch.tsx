
import React, { useEffect, useState } from 'react'

const useFetch = (url: any) => {
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const res = await fetch(url);
                const json = await res.json();
                setData(json);
            } catch (error) {
                setError(error)
            } finally{
                setLoading(false)
            }
        }
        fetchData();
    },[url])
    return {
        error,
        data,
        loading
    }
}

export default useFetch;