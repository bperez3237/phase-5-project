
// export const formatActivityObj = 
import { useState } from "react";

var xlsx = require("xlsx")
// const [excelData,setExcelData] = useState('')

const dicToArray = (dic) => {
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

export const formatActivityObj = (excelData) => {

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
    return (dicToArray(costDic))
}


export const readUploadFile = (e) => {
    e.preventDefault();
    var allActivities = {}

    if (e.target.files) {

        const reader = new FileReader();

        reader.onload = (e) => {
            const data = e.target.result;
            const workbook = xlsx.read(data, { type: "array" });
            // var allActivities = {}

            workbook.SheetNames.forEach((sheet)=>{
                const worksheet = workbook.Sheets[sheet]
                allActivities[sheet] = xlsx.utils.sheet_to_json(worksheet)
            })
            console.log(formatActivityObj(allActivities))
            return formatActivityObj(allActivities)

            // setExcelData(allActivities)
        };
        reader.readAsArrayBuffer(e.target.files[0]);
    }
    console.log(formatActivityObj(allActivities))
    // return formatActivityObj(allActivities)
}
