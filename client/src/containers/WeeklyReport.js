import CodeReport from "../components/CodeReport";
import {useState, useEffect, useContext} from 'react'
import useFetch from "../hooks/useFetch";
import { WorkWeekContext } from "../context/WorkWeekContext";

function WeeklyReport({workWeekId}){
    const {workWeek} = useContext(WorkWeekContext)
    console.log(workWeek)
    // const {data, loading, error} = useFetch(`/work_weeks/${workWeekId}/cost_codes`)
    


    const codeElems = workWeek?.cost_codes?.map((costCode)=> <CodeReport key={costCode.id} costCodeId={costCode.id} workWeekId={workWeek.id}/>)

    return(
        <>
            {codeElems}
        </>
    )
}

export default WeeklyReport;