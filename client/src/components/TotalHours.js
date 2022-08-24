import { useEffect, useState } from "react"

function TotalHours({id}) {
    const [value,setValue] = useState(0)

    useEffect(()=>{
        fetch(`/total_hours/${id}`).then(r=>r.json()).then(data=>setValue(data))
    },[])

    return (
        <p key={id}>{value}</p>
    )
}

export default TotalHours;