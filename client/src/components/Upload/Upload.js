import React, {useContext} from "react";
import UploadForm from "./UploadForm";
import ActivityList from "./ActivityList";
import {Container, Row, Col} from 'react-bootstrap'
import {WorkWeekContext} from '../../context/WorkWeekContext'
import useFetch from "../../hooks/useFetch";
import {ActivitiesContext} from './context/ActivitiesContext'
import ActivitiesStatus from "./ActivityStatus";
import DeleteTimesheet from './DeleteTimesheet'
import DismissableError from "../DismissableError";



function Upload() {
    const {workWeek} = useContext(WorkWeekContext)
    const {data, setData, error} = useFetch(`/work_weeks/${workWeek.id}/activities`)

    return (
        <Container >
            {error && <DismissableError error={error} />}
            <ActivitiesContext.Provider value={{activities: data, setActivities:setData}}>
            <Row>
                <Col>
                    <UploadForm />
                    <DeleteTimesheet />
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