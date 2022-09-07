import CodeReport from "../components/CodeReport";
import { useContext} from 'react'
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