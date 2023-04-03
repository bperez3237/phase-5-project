import {useContext } from 'react'
import { WorkWeekContext } from "../../context/WorkWeekContext"

function ChangeWeek() {
    const { setWorkWeek} = useContext(WorkWeekContext)


    return(
        <div className="element week-select">
            <h4>Change Week:</h4>
            <button id='button' onClick={()=>setWorkWeek(null)}>Select</button>
        </div>
    )
}

export default ChangeWeek;