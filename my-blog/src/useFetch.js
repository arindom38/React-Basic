import { useState,useEffect } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [errorMssg, setErrorMssg] = useState(null)

    useEffect(() => {
        setTimeout(() => { //timeout is used for just simulating real fetching time
            fetch(url)
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
                    setIsLoading(false)
                    setErrorMssg(err.message)
                })
        }, 1000)
    }, [url])

    return (data,isLoading,errorMssg);
}
 
export default useFetch;