import {useState, useEffect} from 'react'

function Loading({loading}) {
    const [counter, setCounter] = useState(0)

    useEffect(()=>{
        let interval = null
        if (loading) {
            clearInterval(interval)
            interval = setInterval(()=>setCounter(counter=>counter+1),1000)
        } else {
            clearInterval(interval)
            setCounter(0)
        }
    },[loading])

    return(
        <p>Loading{counter%3==0 ? '.' : (counter%3==1 ? '..' : '...')}</p>
    )
}

export default Loading;