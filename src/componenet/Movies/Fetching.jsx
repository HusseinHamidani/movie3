import axios from 'axios'
import { useEffect, useState } from 'react'

const useFetch = (url )=>{
    const [data , setData] = useState(null);
    const [loading , setLoading] = useState(true);
    const [err , setErr] = useState(null);
    const compineUrl = url

    const FetchingData =async (compineUrl) =>{
        await axios.get(compineUrl)
        .then((res) =>{
            res == res.ok ? console.log("the responce is not ok") : setData(res.data) & setLoading(false);

        })
        .catch((err) =>{
            setLoading(false);
            setErr("there is an error" , err)
        })
    }
    useEffect(()=>{
        FetchingData(compineUrl);
    },[url]);
    return {data , loading , err}
}

export default useFetch;