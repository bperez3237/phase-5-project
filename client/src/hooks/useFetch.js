import {useState, useEffect} from 'react'

function useFetch(url) {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(()=> {
        setLoading(true)
        fetch(url).then((r)=>{
            if (r.ok) {
                r.json().then((data)=>setData(data))
            } else {
                r.json().then((error)=>setError(error))
            }
        }).finally(()=>setLoading(false))
    },[url])

    return {data, loading, error}
}

export default useFetch;