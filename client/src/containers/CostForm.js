import React, { createContext, useContext } from 'react'
import {useState, useEffect} from 'react'
import {Button, Form} from 'react-bootstrap'
import { ActivitiesContext } from '../context/ActivitiesContext'
var xlsx = require("xlsx")

function CostForm() {
    const [activityObj,setActivityObj] = useState([])
    const [excelData,setExcelData] = useState('')
    // const {activities, setActivities} = useContext(ActivitiesContext)
    const [costs, setCosts] = useState([])
    const [week, setWeek] = useState("2022-09-04")
    const [activities, setActivities] = useState([])

    useEffect(()=>{
        formatActivityObj()
    },[excelData])

    useEffect(()=>{
        fetch(`/activity_week/${week}`).then(r=>r.json()).then(data=>setActivities(data))
    },[week])

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
                setCosts([...costs,data])
                console.log(data)})
    }

    function handleSubmitActivity(obj) {

        fetch('/activities', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }, body: JSON.stringify({...obj,"end_date": week})
        })
            .then(r=>r.json())
            .then((newActivity)=>{
                obj.costs.forEach((cost)=>{
                    handleSubmitCost(newActivity.id, cost)
                })
            })

    }

    function handleSubmitTimesheet(e) {
        e.preventDefault()
        
        if (costs.length > 0) {
            console.log('data already exists')
        } else {
            activityObj.forEach((activity)=>handleSubmitActivity(activity))
        }
    }


    function dicToArray(dic) {
        const arr = []
        for (const activity in dic) {
            console.log(dic[activity])
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
                                    // "date": (date === 'Monday' ? "2022-07-22" : (date === 'Tuesday' ? "2022-07-23" : "2022-07-24")),
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

    // console.log(activityObj)
    console.log(activities)


    return (
        <div>
            <h1>Upload Timesheet</h1>
            <Form>
                <Form.Group >
                    <Form.Label htmlFor="upload">Upload File</Form.Label>
                    <Form.Control type="file" onChange={readUploadFile} accept=".xlsx, .xls" />
                    <br/>
                    <Button onClick={handleSubmitTimesheet}>Upload</Button>
                </Form.Group>
            </Form>
            <select onChange={(e)=>setWeek(e.target.value)}>
                <option value="2022-07-24">07/24/22</option>
                <option value="2022-09-04">09/04/22</option>
                <option value="2022-09-11">09/11/22</option>
                <option value="2022-09-18">09/18/22</option>
                <option value="2022-09-25">09/25/22</option>
                <option value="2022-10-02">10/02/22</option>
            </select>
        </div>
        
    )
}

export default CostForm;