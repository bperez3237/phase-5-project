import CodeReport from "../components/CodeReport";
import {useState, useEffect, useContext} from 'react'
import useFetch from "../hooks/useFetch";
import { WorkWeekContext } from "../context/WorkWeekContext";

function WeeklyReport(){
    const {workWeek} = useContext(WorkWeekContext)

    const codeElems = workWeek?.cost_codes?.map((costCode)=> <CodeReport key={costCode.id} costCodeId={costCode.id} workWeekId={workWeek.id}/>)

    return(
        <>
            {codeElems}
        </>
    )
}

export default WeeklyReport;