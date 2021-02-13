import { useState,useEffect} from 'react';

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setisPending] = useState(true);
    const [error, seterror] = useState('');
    const abortCont = new AbortController();

    useEffect(() => {
        fetch(url, { signal: abortCont.signal })
            .then(res => {
                return res.json();
            })
            .then(data => {
                setisPending(false);
                setData(data);
            })
            .catch(err => {
                setisPending(false);
                seterror(err.message);
                console.log(err);
            });
            return () => abortCont.abort();
    }, [url]);
    return { data, isPending, error};
}

export default useFetch;