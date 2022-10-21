import {Button, ListGroup } from 'react-bootstrap'
import {useState, useEffect} from 'react'
import SubmittedCode from './SubmittedCode'
import DismissableError from '../Error/DismissableError'
import {formatCurrency, formatNumber} from '../../services/Format/FormatNumber'

function QuantityForm({costCode, workWeek, Col, Row}) {
    const [value, setValue] = useState(0)
    const [submittedStatus, setSubmittedStatus] = useState(false)
    const [error, setError] = useState('')
    const [toggle, setToggle] = useState(false)

    function handleClick() {
        setToggle(!toggle)
    }

    useEffect(()=> {
        setSubmittedStatus(workWeek.units.filter((unit)=>unit.cost_code_id===costCode.id).length>0 ? true : false)
    },[workWeek, costCode])

    useEffect(()=>setValue(0),[error])
    
    function handleSubmit(e) {
        e.preventDefault()
        setError('')
        const params = {cost_code_id: costCode.id, quantity: value, work_week_id: workWeek.id}
        fetch(`/units`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }, body: JSON.stringify(params)
        }).then((r)=>{
            if (r.ok) {
                r.json().then(()=>{
                    setSubmittedStatus(true)
                    setValue(0)
                })
            } else {
                r.json().then((err)=>setError(err.error))
            }
        })
    }

    const activityElems = workWeek.activities?.filter((activity)=>activity.cost_code_id===costCode.id).map((activity)=>{
        return (<ListGroup.Item key={activity.id}>{activity.description} - {activity.total_hours} hours</ListGroup.Item>)
    })
    

    return (
        <div className='container m-3 p-3' style={{border:'1px',borderStyle:'solid'}}>
            <header>
                <h3>{costCode.code} - {costCode.name}</h3>
                <p><span style={{fontWeight:'bold'}}>Total Budget:</span> {formatCurrency(costCode.budget_hours*108)}</p>
                <p><span style={{fontWeight:'bold'}}>Total Units:</span> {formatNumber(costCode.budget_quantity)}</p>
            </header>
            {error && <DismissableError error={error} setError={setError}/>}
            {submittedStatus ? (
                <SubmittedCode workWeek={workWeek} setSubmittedStatus={setSubmittedStatus} costCode={costCode} />
            ) : (
                <>
                <form className='d-flex'  onSubmit={handleSubmit} style={{width:'100%'}}>
                    <input value={value} onChange={(e)=>setValue(e.target.value)}/>
                    <Button type='submit' >Submit</Button>
                </form>
                <button className='accordion' onClick={handleClick}>Activities:</button>
                <div className='panel' style={{display:toggle ? 'block' : 'none'}}>
                    <ul>{activityElems}</ul>
                </div>
                </>
            )}
        </div>
    )
}
export default QuantityForm;