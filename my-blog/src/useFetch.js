import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [errorMssg, setErrorMssg] = useState(null)

    useEffect(() => {
        const abortCont = new AbortController() // A constructor for abortint any request 
            fetch(url, { signal: abortCont.signal })
                .then(res => {
                    if (!res.ok) {
                        throw Error('could not find the resources')
                    }
                    return res.json()
                })
                .then(data => {
                    setData(data)
                    setIsLoading(false)
                    setErrorMssg(null)
                })
                .catch(err => {
                    if (err.name === 'AbortError') { // if requet aborted no need to change state
                        console.log('Fetch Aborted')
                    } else {
                        setIsLoading(false)
                        setErrorMssg(err.message)
                    }
                })

        return () => {
            abortCont.abort() //useEffect Cleanup: abort request when the component is switched
        }
    }, [url])

    return { data, isLoading, errorMssg };
}

export default useFetch;