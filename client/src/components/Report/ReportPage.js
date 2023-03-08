import CodeReport from "./CodeReport";
import { WorkWeekContext } from "../../context/WorkWeekContext";
import { useContext } from "react";
import useCostCodes from "../../hooks/useCostCodes";
import "./Report.css";


function ReportPage() {
    const {workWeek} = useContext(WorkWeekContext)
    const {costCodes} = useCostCodes(workWeek.id)

    const codeElems = costCodes.map((costCode)=> <CodeReport key={costCode.id} costCodeId={costCode.id} workWeekId={workWeek.id}/>)

    return(
        <div className="page-container report">
            {codeElems}
        </div>
    )
}

export default ReportPage;