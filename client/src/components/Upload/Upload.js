import React, {useContext} from "react";
import CostForm from "./CostForm";
import ActivityList from "./ActivityList";
import {Container, Row, Col} from 'react-bootstrap'
import {WorkWeekContext} from '../../context/WorkWeekContext'
import useFetch from "../../hooks/useFetch";
import {ActivitiesContext} from './context/ActivitiesContext'
import ActivitiesStatus from "./ActivityStatus";



function Upload() {
    const {workWeek} = useContext(WorkWeekContext)
    const {data, setData, loading} = useFetch(`/work_weeks/${workWeek.id}/activities`)

    const listComponent = <ActivityList activities={data} setActivities={setData} />

    return (
        <Container>
            <ActivitiesContext.Provider value={{activities: data, setActivities:setData}}>
            <Row>
                <Col><CostForm activities={data} setActivities={setData}/></Col>
                <Col>
                    <ActivitiesStatus />
                    <ActivityList />
                </Col>
            </Row>
            </ActivitiesContext.Provider>
        </Container>
    )
}

export default Upload;