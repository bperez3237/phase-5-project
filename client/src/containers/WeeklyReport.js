import CodeReport from "../components/CodeReport";
import {useState, useEffect} from 'react'

function WeeklyReport( ){
    const [costCodes, setCostCodes] = useState([])

    useEffect(()=>{
        fetch('/report')
            .then(r=>r.json()).then(data=>setCostCodes(data))
    },[])


    const codeElems = costCodes.map((costCode)=> <CodeReport key={costCode.id} costCode={costCode}/>)

    return(
        <>
            {codeElems}
        </>
    )
}

export default WeeklyReport;