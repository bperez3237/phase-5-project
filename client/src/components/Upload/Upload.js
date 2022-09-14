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
    const {data, setData, refetch} = useFetch(`/work_weeks/${workWeek.id}/activities`)

    return (
        <Container>
            <ActivitiesContext.Provider value={{activities: data, setActivities:setData}}>
            <Row>
                <Col>
                    <CostForm refetch={refetch}/>
                    </Col>
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