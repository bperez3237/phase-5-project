import React, {useState, useContext} from "react";
import CostForm from "../containers/CostForm";
import ActivityList from "../containers/ActivityList";
import {Container} from 'react-bootstrap'
import {WorkWeekContext} from '../context/WorkWeekContext'
import useFetch from "../hooks/useFetch";



function Upload() {
    const {workWeek} = useContext(WorkWeekContext)
    // const [activities, setActivities] = useState([])
    const {data, setData, loading} = useFetch(`/work_weeks/${workWeek.id}/activities`)


    return (
        <Container>
            <CostForm activities={data} setActivities={setData}/>
            <ActivityList activities={data} setActivities={setData} />
        </Container>
    )
}

export default Upload;