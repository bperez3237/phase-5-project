import CodeReport from "../components/CodeReport";
import {useState, useEffect} from 'react'
import useFetch from "../hooks/useFetch";

function WeeklyReport({workWeekId}){

    const {data, loading, error} = useFetch(`/work_weeks/${workWeekId}/cost_codes`)


    const codeElems = data.map((costCode)=> <CodeReport key={costCode.id} costCode={costCode}/>)

    return(
        <>
            {codeElems}
        </>
    )
}

export default WeeklyReport;