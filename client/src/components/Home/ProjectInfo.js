import useFetch from "../../hooks/useFetch";
import React from "react";
import {formatCurrency, formatNumber} from '../../services/Format/FormatNumber'
import DismissableError from '../Error/DismissableError'

function ProjectInfo() {
    const {data, error} = useFetch('/project_summary')

    return(
        <div className='element project-info' >
        {error && <DismissableError error={error} />}
            <header>
                <h3>Project Summary:</h3>
            </header>
            <div>
                <p>Total Budgeted Hours: {formatNumber(data.project_budget_hours)}</p>
                <p>Total Budgeted Cost: {formatCurrency(data.project_budget_hours*108)}</p>
                <p>Hours to Date: {formatNumber(data.total_hours)}</p>
                <p>Cost to Date: {formatCurrency(data.total_cost)}</p>
            </div>
        </div>

    )
}

export default ProjectInfo;