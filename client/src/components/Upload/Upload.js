import React, {useContext} from "react";
import CostForm from "./CostForm";
import ActivityList from "./ActivityList";
import {Container, Row, Col} from 'react-bootstrap'
import {WorkWeekContext} from '../../context/WorkWeekContext'
import useFetch from "../../hooks/useFetch";
import Activities from "./Activities";



function Upload() {
    const {workWeek} = useContext(WorkWeekContext)
    const {data, setData, loading} = useFetch(`/work_weeks/${workWeek.id}/activities`)

    const activityComponent = <ActivityList activities={data} setActivities={setData} />


    return (
        <Container>
            <Row>
                <Col><CostForm activities={data} setActivities={setData}/></Col>
                <Col><Activities ActivityList={activityComponent} /></Col>
            </Row>
        </Container>
    )
}

export default Upload;