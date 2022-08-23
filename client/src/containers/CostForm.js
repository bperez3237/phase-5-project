import React, { createContext, useContext } from 'react'
import {useState, useEffect} from 'react'
import {Button, Form, FormGroup} from 'react-bootstrap'
import { ActivitiesContext } from '../context/ActivitiesContext'
var xlsx = require("xlsx")

function CostForm() {
    const [activityObj,setActivityObj] = useState([])
    const [excelData,setExcelData] = useState(null)
    const {activities, setActivities} = useContext(ActivitiesContext)

    useEffect(()=>{
        formatActivityObj()
        console.log('formatted')
    },[excelData])

    // console.log(activities)
    const readUploadFile = (e) => {
        e.preventDefault();
        if (e.target.files) {
            const reader = new FileReader();
            reader.onload = (e) => {
                const data = e.target.result;
                const workbook = xlsx.read(data, { type: "array" });
                var allActivities = {}
                // console.log(workbook.SheetNames)
                // for (const sheet in Object.values(workbook.SheetNames)) {
                //     console.log(sheet)
                //     const worksheet = workbook.Sheets[sheet];
                //     allActivities =  [...allActivities, xlsx.utils.sheet_to_json(worksheet)]
                // }

                workbook.SheetNames.forEach((sheet)=>{
                    // console.log(sheet)
                    const worksheet = workbook.Sheets[sheet]
                    // allActivities = allActivities.push(xlsx.utils.sheet_to_json(worksheet))
                    // console.log(xlsx.utils.sheet_to_json(worksheet))
                    // const sheetData = xlsx.utils.sheet_to_json(worksheet).map((row)=> ({...row, date: sheet}))
                    allActivities[sheet] = xlsx.utils.sheet_to_json(worksheet)
                    // allActivities = allActivities.concat(sheetData)
                })
                // const sheetName = workbook.SheetNames[0];
                // const worksheet = workbook.Sheets[sheetName];
                // const json = xlsx.utils.sheet_to_json(worksheet);
                // console.log(allActivities)
                setExcelData(allActivities)
                console.log(allActivities)
                // setExcelData(json)÷
            };
            reader.readAsArrayBuffer(e.target.files[0]);
        }
    }


    function handleSubmitCost(activity_id, costObj) {
        // console.log(costObj)
        fetch('/costs', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }, 
                body: JSON.stringify({...costObj, activity_id: activity_id})
        })
            .then(r=>r.json())
            .then(data=>console.log(data))
    }

    function handleSubmitActivity(obj) {

        fetch('/activities', {
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

    }

    function handleSubmitTimesheet(e) {
        e.preventDefault()
        // console.log(activities)
        // console.log(activityObj)
        console.log('submit timesheet')
        activityObj.forEach((activity)=>handleSubmitActivity(activity))
    }


    function dicToArray(dic) {
        const arr = []
        // console.log(dic)
        for (const activity in dic) {
            arr.push({
                "code": dic[activity]['cost_code'],
                "description": activity,
                'costs': dic[activity]['costs'],
                "day": dic[activity]['date']
            })
        }
        console.log(arr)
        return arr
    }


    function formatActivityObj() {
        // console.log(excelData)

        const costDic = {}
        for (const date in excelData) {
            for (const row in excelData[date]) {
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
        // console.log(dicToArray(costDic))
        setActivityObj(dicToArray(costDic))
        // return dicToArray(costDic)
        
    }

    return (
        <div>
            <h1>hi</h1>
            <Button onClick={handleSubmitTimesheet}>Submit</Button>
            <form >
                <label htmlFor="upload">Upload File</label>
                <input
                    type="file"
                    name="upload"
                    id="upload"
                    onChange={readUploadFile}
                    accept=".xlsx, .xls"
                />
            </form>
        </div>
        
    )
}

export default CostForm;