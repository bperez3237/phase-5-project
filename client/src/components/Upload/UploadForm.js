import React from 'react'
import {useState, useContext} from 'react'
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
        
        if (workWeek?.activities?.length > 0) {
            console.log('data already exists')
            setError({error:'Data Already Exists'})
            return;
        } 

        if (!workWeek) {
            console.log('not a valid workweek')
            return;
        }
            
        setError('')
        var newObjArray = []
        activityObj.forEach((activity)=>{  
            fetch(`/work_weeks/${workWeek.id}/activities`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                }, body: JSON.stringify(activity)
                })
                .then(r=>{
                    if (!r.ok) {
                        r.json().then((error)=>setError(error))
                        return;
                    }


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
                                if (!r.ok) {
                                    r.json().then((error=>setError(error)))
                                    return;
                                }                    
                                r.json().then(newCost=>{
                                newObjArray = addCostToArray(newObjArray,newCost)
                                }).finally(()=>{
                                    setActivities(newObjArray)
                                    setWorkWeek({...workWeek,activities: newObjArray})
                                })
                            })
                        }) 
                    })
                })
            })
        
    }

    return (
        <div className='element file-upload'>
            <h4>Upload Timesheet</h4>
            {error && <DismissableError error={error}  setError={setError}/>}
            <form id='upload-form'>
                <input type="file" onChange={readUploadFile} accept=".xlsx, .xls" />
                <button id='button' onClick={handleSubmitTimesheet}>Upload</button>
            </form>
        </div>
        
    )
}

export default UploadForm;