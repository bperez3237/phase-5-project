import React from 'react'
import {useState, useEffect} from 'react'
import {Button, Form, FormGroup} from 'react-bootstrap'
// import {xlsx} from 'client/node_modules/xlsx'
var xlsx = require("xlsx")

function CostForm() {
    const [data,setData] = useState(null)


    // const [costActivityObj, setCostActivityObj] = useState({
        // "date": ,
    //     "description": "",
    //     "cost_code_id": "",
    //     "employee_id": "",
    //     "hours": "",
    // })


     // for each activity:
        //     fetch(POST activity)
        //     for each cost:
        //         fetch(POST cost)


    // function handleChange(e, param) {
    //     const newObj = {...costActivityObj, [param]: e.target.value}
    //     setCostActivityObj(newObj)
    // }

    const readUploadFile = (e) => {
        e.preventDefault();
        if (e.target.files) {
            const reader = new FileReader();
            reader.onload = (e) => {
                const data = e.target.result;
                const workbook = xlsx.read(data, { type: "array" });
                const sheetName = workbook.SheetNames[0];
                const worksheet = workbook.Sheets[sheetName];
                const json = xlsx.utils.sheet_to_json(worksheet);
                setData(json);
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
            .then(data=>console.log(data))
    }

    function handleSubmitActivity(activityObj) {

        fetch('/activities', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }, body: JSON.stringify(activityObj)
        })
            .then(r=>r.json())
            .then((newActivity)=>{
                activityObj.costs.forEach((cost)=>{
                    handleSubmitCost(newActivity.id, cost)
                })
            })

    }

    function handleSubmitTimesheet(e) {
        e.preventDefault()

        const timesheetObj = [{
            "cost_code_id": 36,
            "description": 'alksdjncqlkjcnoqeuqwncklane foin ckajnclkjc',
            'costs': [{
                'employee_id': 36,
                'hours': 104
            },{
                'employee_id': 38,
                'hours': 202
            },{
                'employee_id': 38,
                'hours': 32
            },{
                'employee_id': 38,
                'hours': 40
            },{
                'employee_id': 37,
                'hours': 39
            }]
        },{
            "cost_code_id": 37,
            "description": 'alksdjncqlkjcnoqeuqwncklane foin ckajnclkjc',
            'costs': [{
                'employee_id': 37,
                'hours': 10
            },{
                'employee_id': 40,
                'hours': 20
            },{
                'employee_id': 40,
                'hours': 39
            }]
        },{
            "cost_code_id": 37,
            "description": 'alksdjncqlkjcnoqeuqwncklane foin ckajnclkjc',
            'costs': [{
                'employee_id': 37,
                'hours': 100
            },{
                'employee_id': 38,
                'hours': 201
            },{
                'employee_id': 38,
                'hours': 390
            },{
                'employee_id': 39,
                'hours': 390
            }]
        }]

        timesheetObj.forEach((activity)=>handleSubmitActivity(activity))
    }

    function formatActivityObj(e) {
        e.preventDefault()
        // console.log(data)
        // console.log(data[0])
        // data[0].forEach((act)=>console.log(act))
        // console.log(Object.keys(data[0]))
        for (const activity in data[0]) {
            console.log(activity)
            console.log(data[0][activity])
        }
    }

    return (
        <div>
            <h1>hi</h1>
            {/* <Button onClick={handleSubmitTimesheet}>Submit</Button> */}
            <form >
                <label htmlFor="upload">Upload File</label>
                <input
                    type="file"
                    name="upload"
                    id="upload"
                    onChange={readUploadFile}
                    accept=".xlsx, .xls"
                />
                <button onClick={formatActivityObj}>run</button>
            </form>
        </div>
        
    )
}

export default CostForm;