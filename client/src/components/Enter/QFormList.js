import QuantityForm from './QuantityForm'
import { useContext } from 'react'
import {WorkWeekContext} from '../../context/WorkWeekContext'

function QFormList() {
    const {workWeek} = useContext(WorkWeekContext)

    const costCodeElems = workWeek.cost_codes?.map((costCode)=><QuantityForm key={costCode.id} costCode={costCode} workWeek={workWeek}/>)

    return(
        <>
            {costCodeElems}
        </>
    )
}

export default QFormList