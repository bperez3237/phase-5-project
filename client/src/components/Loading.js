import {useState, useEffect} from 'react'

function Loading({loading}) {
    const [counter, setCounter] = useState(0)

    useEffect(()=>{
        console.log('here')
        let interval = null
        if (loading) {
            clearInterval(interval)
            interval = setInterval(()=>setCounter(counter=>counter+1),1000)
        } else {
            console.log('cancel')
            clearInterval(interval)
            setCounter(0)
        }
    },[loading])

    // !loading ? setOn(false) : setOn(true)
    console.log(counter, loading)
    return(
        <p>Loading{counter%3==0 ? '.' : (counter%3==1 ? '..' : '...')}</p>
    )
}

export default Loading;