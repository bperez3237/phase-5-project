import {Accordion, ListGroup} from 'react-bootstrap'
import './Upload.css'
import { useState} from 'react'

function CostList({costs}) {
    const [toggle, setToggle] = useState(false)

    function handleClick() {
        setToggle(!toggle)
    }

    const costElements = costs.map((cost)=><li key={cost.id}>{cost.employee.name} - {cost.hours}</li>)

    return(
        <div>
            <button className='accordion' onClick={handleClick}>Costs:</button>
            <div className='panel' style={{display:toggle ? 'block' : 'none'}}>
                <ul>{costElements}</ul>
            </div>
        </div>

    )
}

export default CostList;