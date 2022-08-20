import QuantityForm from '../components/QuantityForm'
import { useState, useEffect } from 'react'
import {Button, Form} from 'react-bootstrap'

function QFormList() {
    const [activities, setActivities] = useState([])
    useEffect(()=>{
       fetch('/activities').then(r=>r.json()).then((data)=>setActivities(data))
    },[])
    const activityFormElems = activities.map((activity)=>{
        if (activity.approved != true) {
            <QuantityForm key={activity.id} activity={activity}/>
        }
    })

    console.log(activities)

    return(
        <>
            {activityFormElems}
        </>
    )
}

export default QFormList