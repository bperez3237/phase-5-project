import React from 'react'
import {useState, useEffect, useContext} from 'react'
import {Button, Container, Form} from 'react-bootstrap'
import { WorkWeekContext } from '../../context/WorkWeekContext'
import {formatUploadObj, addCostToArray} from './format/formatUpload'
import { ActivitiesContext } from "./context/ActivitiesContext";

var xlsx = require("xlsx")

function CostForm({refetch}) {
    const {workWeek} = useContext(WorkWeekContext)
    const {activities, setActivities} = useContext(ActivitiesContext)
    const [activityObj,setActivityObj] = useState([])

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


    function handleSubmitCost(activity_id, costObj) {
        fetch('/costs', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }, 
                body: JSON.stringify({...costObj, activity_id: activity_id})
        })
            .then(r=>r.json())
            .then(data=>{
                console.log(data)})
    }

    function handleSubmitActivity(obj) {
        if (workWeek) {
            fetch(`/work_weeks/${workWeek.id}/activities`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                }, body: JSON.stringify(obj)
            })
                .then(r=>r.json())
                .then((newActivity)=>{
                    obj.costs.forEach((cost)=>{
                        handleSubmitCost(newActivity.id, cost)
                    })
                })
            
        } else {console.log('not a valid workweek')}

    }

    function handleSubmitTimesheet(e) {
        e.preventDefault()
        
        if (workWeek.activities.length > 0) {
            console.log('data already exists')
        } else {
            activityObj.forEach((activity)=>handleSubmitActivity(activity))
        }
    }

    return (
        <Container className='m-3' style={{border:'1px', borderStyle:'solid'}}>
            <h1>Upload Timesheet</h1>
            <Form>
                <Form.Group >
                    <Form.Label htmlFor="upload">Upload File</Form.Label>
                    <Form.Control type="file" onChange={readUploadFile} accept=".xlsx, .xls" />
                    <br/>
                    <Button onClick={handleSubmitTimesheet}>Upload</Button>
                </Form.Group>
            </Form>
        </Container>
        
    )
}

export default CostForm;