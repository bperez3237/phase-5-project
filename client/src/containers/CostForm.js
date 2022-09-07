import React from 'react'
import {useState, useEffect, useContext} from 'react'
import {Button, Form} from 'react-bootstrap'
import { WorkWeekContext } from '../context/WorkWeekContext'
var xlsx = require("xlsx")

function CostForm({activities, setActivities}) {
    const {workWeek} = useContext(WorkWeekContext)
    const [activityObj,setActivityObj] = useState([])
    const [excelData,setExcelData] = useState('')
    // const [costs, setCosts] = useState([])

    useEffect(()=>{
        formatActivityObj()
    },[excelData])

    const readUploadFile = (e) => {
        console.log('here')
        e.preventDefault();
        if (e.target.files) {
            const reader = new FileReader();
            reader.onload = (e) => {
                const data = e.target.result;
                const workbook = xlsx.read(data, { type: "array" });
                var allActivities = {}

                workbook.SheetNames.forEach((sheet)=>{
                    const worksheet = workbook.Sheets[sheet]
                    allActivities[sheet] = xlsx.utils.sheet_to_json(worksheet)
                })
                setExcelData(allActivities)
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
                // setCosts([...costs,data])
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


    function dicToArray(dic) {
        const arr = []
        for (const activity in dic) {
            arr.push({
                "code": dic[activity]['cost_code'],
                "description": activity,
                'costs': dic[activity]['costs'],
                "date": dic[activity]['date'],
            })
        }
        return arr
    }


    function formatActivityObj() {

        const costDic = {}
        for (const date in excelData) {
            for (const row in excelData[date]) {
                // conditional does work if !== is used instead of != because row is a string
                if (row != 0) {
                    Object.keys(excelData[date][row]).forEach((key)=>{
                        if (key!=='Employee') {
                            if (!costDic[key]) {
                                costDic[key] = {
                                    "date": (date === 'Monday' ? "07-22-2022" : (date === 'Tuesday' ? "07-23-2022" : "07-24-2022")),
                                    "cost_code": excelData[date][0][key],
                                    "costs": [{'employee': excelData[date][row]["Employee"], "hours": excelData[date][row][key]}]
                                }
                            } else {
                                costDic[key]['costs'].push({'employee': excelData[date][row]["Employee"], "hours": excelData[date][row][key]})
                            }
                        }
                    })
                }
            }
        }
        setActivityObj(dicToArray(costDic))
    }


    return (
        <>
            <h1>Upload Timesheet</h1>
            <Form>
                <Form.Group >
                    <Form.Label htmlFor="upload">Upload File</Form.Label>
                    <Form.Control type="file" onChange={readUploadFile} accept=".xlsx, .xls" />
                    <br/>
                    <Button onClick={handleSubmitTimesheet}>Upload</Button>
                </Form.Group>
            </Form>
        </>
        
    )
}

export default CostForm;