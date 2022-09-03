import CodeReport from "../components/CodeReport";
import {useState, useEffect} from 'react'

function WeeklyReport({workWeekId}){
    const [costCodes, setCostCodes] = useState([])

    useEffect(()=>{
        console.log('here')
        fetch(`/report/${workWeekId}`)
            .then(r=>r.json()).then(data=>setCostCodes(data))
    },[workWeekId])


    const codeElems = costCodes.map((costCode)=> <CodeReport key={costCode.id} costCode={costCode}/>)

    return(
        <>
            {codeElems}
        </>
    )
}

export default WeeklyReport;