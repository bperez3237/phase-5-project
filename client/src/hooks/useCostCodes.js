import { useState, useEffect } from 'react'

function useCostCodes(id) {
    const [costCodes, setCostCodes] = useState([])
    const [isLoaded, setIsLoaded] = useState(false)
    useEffect(()=> {
        const fetchData = async () => {
            const res = await fetch(`/work_weeks/${id}/cost_codes`)
            const data = await res.json()
            setCostCodes(data)
            setIsLoaded(true)
        }
        fetchData()
        .catch(console.error)

    },[id])
    return {costCodes, setCostCodes, isLoaded}
}

export default useCostCodes;