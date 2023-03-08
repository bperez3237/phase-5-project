import QuantityForm from './QuantityForm'
import { useContext } from 'react'
import {WorkWeekContext} from '../../context/WorkWeekContext'
import './Enter.css'
import useCostCodes from '../../hooks/useCostCodes'

function EnterQuantities() {
    const {workWeek} = useContext(WorkWeekContext)

    const {costCodes, isLoaded} = useCostCodes(workWeek.id)

    // const costCodeElems = costCodes.map((costCode)=><QuantityForm key={costCode.id} costCode={costCode} workWeek={workWeek}/>)

    console.log(costCodes)
    return (
        <div className='page-container enter'>
            {isLoaded ? costCodes.map((costCode)=>(
                <QuantityForm key={costCode.id} costCode={costCode} workWeek={workWeek}/>
                )) : (<h1>Loading...</h1>)}
        </div>
    )
}
export default EnterQuantities