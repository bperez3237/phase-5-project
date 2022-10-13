import React from 'react'
import {useState, useContext} from 'react'
import {Button, Container, Form} from 'react-bootstrap'
import { WorkWeekContext } from '../../context/WorkWeekContext'
import { ActivitiesContext } from './context/ActivitiesContext'
import {addCostToArray, formatUploadObj} from './format/formatUpload'
import DismissableError from '../Error/DismissableError'
var xlsx = require("xlsx")

function UploadForm() {
    const {workWeek, setWorkWeek} = useContext(WorkWeekContext)
    const {setActivities} = useContext(ActivitiesContext)
    const [activityObj,setActivityObj] = useState([])
    const [error,setError] = useState('')


    const readUploadFile = (e) => {
        e.preventDefault();
        var allActivities = {}
    
        if (e.target.files) {
            const reader = new FileReader();
    
            reader.onload = (e) => {
                const data = e.target.result;
                const workbook = xlsx.read(data, { type: "array" });
                workbook.SheetNames.forEach((sheet)=>{
                    const worksheet = workbook.Sheets[sheet]
                    allActivities[sheet] = xlsx.utils.sheet_to_json(worksheet)
                })
                setActivityObj(formatUploadObj(allActivities))
            };
            reader.readAsArrayBuffer(e.target.files[0]);
        }
    }


    function handleSubmitTimesheet(e) {
        e.preventDefault()
        
        if (workWeek.activities.length > 0) {
            console.log('data already exists')
            setError({error:'Data Already Exists'})
        } else {
            setError('')
            var newObjArray = []
            activityObj.forEach((activity)=>{
                if (workWeek) {
                    fetch(`/work_weeks/${workWeek.id}/activities`, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        }, body: JSON.stringify(activity)
                    })
                        .then(r=>{
                            if (r.ok) {
                                r.json().then((newActivity)=>{
                                    newObjArray.push(newActivity)
                                    activity.costs.forEach((cost)=>{
                                        fetch('/costs', {
                                            method: 'POST',
                                            headers: {
                                                'Content-Type': 'application/json'
                                            }, 
                                                body: JSON.stringify({...cost, activity_id: newActivity.id})
                                        })
                                            .then(r=>{
                                                if (r.ok) {
                                                    r.json().then(newCost=>{
                                                    newObjArray = addCostToArray(newObjArray,newCost)
                                                    }).finally(()=>{
                                                        setActivities(newObjArray)
                                                        setWorkWeek({...workWeek,activities: newObjArray})
                                                })} else{
                                                    r.json().then((error=>setError(error)))
                                                }
                                            })
                                        }
                                    )
                                })
                            } else {
                                        r.json().then((error)=>setError(error))
                        }})
                } else {console.log('not a valid workweek')}
            
            })
        }
    }

    return (
        <div className='p-3 m-3' style={{border:'1px', borderStyle:'solid'}}>
            <h1>Upload Timesheet</h1>
            {error && <DismissableError error={error} />}
            <form>
                <label htmlFor="upload">Upload File</label>
                <input type="file" onChange={readUploadFile} accept=".xlsx, .xls" />
                <br/>
                <Button onClick={handleSubmitTimesheet}>Upload</Button>
            </form>
        </div>
        
    )
}

export default UploadForm;