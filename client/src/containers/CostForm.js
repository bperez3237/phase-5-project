import React from 'react'
import {useState, useEffect} from 'react'
import {Button, Form, FormGroup} from 'react-bootstrap'
var xlsx = require("xlsx")

function CostForm() {
    const [data,setData] = useState(null)
    const [activityObj,setActivityObj] = useState([])
    const [j,setJ] = useState(null)

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
                setData(workbook);
                setJ(json)
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


        console.log('submit timesheet')
        activityObj.forEach((activity)=>handleSubmitActivity(activity))
        // handleSubmitActivity(activityObj[0])
    }


    function dicToArray(dic) {
        const arr = []
        for (const activity in dic) {
            arr.push({
                "code": dic[activity]['cost_code'],
                "description": activity,
                'costs': dic[activity]['costs'],
                "date": '07-22-2022'
            })
        }
        // console.log(arr)
        return arr
    }


    function formatActivityObj(e) {
        e.preventDefault()
        console.log(data)
        // data.SheetNames.forEach((sheetName)=>{
        //     console.log(sheetName)
        //     var cellMax = ['a',0]
        //     Object.keys(data.Sheets[sheetName]).forEach((cell)=>{
        //         if (cell.includes('margin') || cell.includes('ref')) {
        //             console.log('do nothing')
        //         } else {
        //             var chars = cell.slice(0, cell.search(/\d/));
        //             var numbs = cell.replace(chars, '');

        //             console.log(chars, numbs); 
        //         } 
        //     })
            
        //     // console.log()
        
        // })

        // data.forEach((row)=>{
        //     console.log(row)

        // })
        // console.log(data[0])
        // data[0].forEach((act)=>console.log(act))
        // console.log(Object.keys(data[0]))

        // for (const activity in data[0]) {
        //     console.log(activity)
        //     console.log(data[0][activity])
        // }

        // const objArray = []


        // data.SheetNames.forEach((sheetName)=>{
        //     Object.keys(data.Sheets[sheetName]).forEach((cell)=>{
        //         if (cell.includes('margin')||cell.includes('ref')) {
        //             console.log('do nothing')
        //         } else {
        //             var chars = cell.slice(0, cell.search(/\d/));
        //             var numbs = cell.replace(chars, '');
                    
        //             if (chars=='A') {
        //                 console.log('do nothing')
        //             } else if (numbs == 1) {
        //                 // console.log(cell, chars, numbs); 
        //                 // console.log(data.Sheets[sheetName][`${chars}1`])

        //                 objArray.push({'date': sheetName ,
        //                 'cost_code': data.Sheets[sheetName][`${chars}2`] ? data.Sheets[sheetName][`${chars}2`]['v'] : 'None',
        //                 'description': data.Sheets[sheetName][`${chars}1`]['v'], 
        //                 'costs':[]})
        //             } else if (numbs == 2) {
        //                 console.log('do nothing again')
        //             } else {

        //             }
        //         }
        //     })
        // })

        // console.log(objArray)
        // console.log(objArray[1]['cost_code']['v'])

        // data.SheetNames.forEach((sheetName)=>{
        //     Object.keys(data.Sheets[sheetName]).forEach((cell)=>{
        //         if (cell.includes('margin')||cell.includes('ref')) {
        //             console.log('do nothing')
        //         } else {
        //             var chars = cell.slice(0, cell.search(/\d/));
        //             var numbs = cell.replace(chars, '');
                    
        //             if (chars=='A' || numbs == 1 || numbs == 2) {
        //                 console.log('do nothing again')
        //             } else {
        //                 var cc = data.Sheets[sheetName][`${chars}2`]['v']
        //                 var desc = data.Sheets[sheetName][`${chars}1`]['v']
        //                 console.log(cell, data.Sheets[sheetName][cell]['v'])
        //                 // objArray.filter((obj)=>obj.)
        //             }

        //         }
        //     })
        // })


        // console.log(j)
        // console.log(j.length)
        // for (const activity in j[0]) {
        //     console.log(activity)
        //     console.log(j[0][activity])
        //     for (let i = 1; i < j.length; i ++) {
        //         if (j[0][activity] in j[i]) {
        //             console.log(j[i]["Employee"])
        //         }
        //     }
        // }


        const costDic = {}
        for (const row in j) {
            if (row != 0) {
                Object.keys(j[row]).forEach((key)=>{
                    if (key!=='Employee') {
                        if (!costDic[key]) {
                            costDic[key] = {
                                "cost_code": j[0][key],
                                "costs": [{'employee': j[row]["Employee"], "hours": j[row][key]}]
                            }
                        } else {
                            costDic[key]['costs'].push({'employee': j[row]["Employee"], "hours": j[row][key]})
                        }
                    }
                })
            }
        }
        setActivityObj(dicToArray(costDic))
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
                <button onClick={formatActivityObj}>run</button>
            </form>
        </div>
        
    )
}

export default CostForm;