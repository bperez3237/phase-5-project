
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

export const formatUploadObj = (excelData) => {

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

export const addCostToArray = (activities, cost) => {
    console.log('here')
    const otherActivities = activities.filter((activity)=> activity.id!==cost.activity_id)
    const thisActivity = activities.find((activity)=> activity.id===cost.activity_id)
    console.log(cost, activities)
    const newActivity = {
        'approved': thisActivity.approved,
        'cost_code': thisActivity.cost_code,
        'cost_code_id': thisActivity.cost_code_id,
        'date': thisActivity.date,
        'description': thisActivity.description,
        'id': thisActivity.id,
        'work_week': thisActivity.work_week,
        'work_week_id': thisActivity.work_week_id,
        'costs': [...thisActivity.costs, cost],
        'total_cost': thisActivity.total_cost + cost.labor_cost,
        'total_hours': thisActivity.total_hours + cost.hours
    }

    return [...otherActivities,newActivity]
}