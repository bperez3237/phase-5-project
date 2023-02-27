import QuantityForm from './QuantityForm'
import { useContext } from 'react'
import {WorkWeekContext} from '../../context/WorkWeekContext'
import './Enter.css'

function EnterQuantities() {
    const {workWeek} = useContext(WorkWeekContext)
    const costCodeElems = workWeek.cost_codes?.map((costCode)=><QuantityForm key={costCode.id} costCode={costCode} workWeek={workWeek}/>)

    return (
        <div className='page-container enter'>
            {costCodeElems}
        </div>
    )
}
export default EnterQuantities