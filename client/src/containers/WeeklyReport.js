import CodeReport from "../components/CodeReport";
import {useState, useEffect} from 'react'

function WeeklyReport( ){
    const [costCodes, setCostCodes] = useState([])

    useEffect(()=>{
        fetch('/codes_with_costs')
            .then(r=>r.json()).then(data=>setCostCodes(data))
    },[])


    const codeElems = costCodes.map((code)=> <CodeReport key={code.id} code={code}/>)


    return(
        <>
            {codeElems}
        </>
    )
}

export default WeeklyReport;