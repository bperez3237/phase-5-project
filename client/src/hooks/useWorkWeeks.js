import { useState, useEffect } from 'react'
import { useContext } from 'react'
import { WorkWeekContext } from "../context/WorkWeekContext"

function useWorkWeeks() {
    const {workWeek, setWorkWeek} = useContext(WorkWeekContext)
    const [workWeeks, setWorkWeeks] = useState([])
    const [isLoaded, setIsLoaded] = useState(false)

    function handleWeekChange(id) {
        fetch(`/select_week`,{
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            }, body: JSON.stringify({work_week_id: id})
        }).then(r=>{
            if (r.ok) {
                r.json().then((data)=>setWorkWeek(data))
            } else {
                r.json().then((error)=>console.log(error))
            }
        })
    }

    useEffect(()=> {
        const fetchData = async () => {
            const res = await fetch(`/work_weeks`)
            const data = await res.json()
            setWorkWeeks(data)
            setIsLoaded(true)
        }
        fetchData()
        .catch(console.error)
    },[])

    return {workWeek, setWorkWeek, workWeeks, setWorkWeeks, isLoaded, handleWeekChange}

}

export default useWorkWeeks