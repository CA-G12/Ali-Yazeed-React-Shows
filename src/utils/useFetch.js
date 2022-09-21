import { useEffect, useState } from "react";

const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const abortController = new AbortController();
        fetch(url, { signal: abortController.signal })
            .then(res => {
                if (!res.ok) {
                    throw Error('fetch is not working')
                }
                return res.json();
            })
            .then(data => {
                setData(data);
                setError(null);
                setIsLoading(false);
            })
            .catch(err => {
                if (err.name === 'AbortError') {
                    console.log('Fetch Aborted');
                } else {
                    setError(err.message);
                    setIsLoading(true);
                }
            });
        return () => abortController.abort();
    }, [url])


    return { data, error, isLoading };
}

export default useFetch;