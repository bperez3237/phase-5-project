import CodeReport from "../components/CodeReport";
import {useState, useEffect} from 'react'

function WeeklyReport( ){
    const [costCodes, setCostCodes] = useState([])

    useEffect(()=>{
        fetch('/report')
            .then(r=>r.json()).then(data=>setCostCodes(data))
    },[])

    // useEffect(()=>{
    //     fetch('/units')
    //         .then(r=>r.json()).then(data=>setCostCodes(data))
    // },[])


    console.log(costCodes)


    const codeElems = costCodes.map((code)=> <CodeReport key={code.id} code={code}/>)


    return(
        <>
            {codeElems}
        </>
    )
}

export default WeeklyReport;