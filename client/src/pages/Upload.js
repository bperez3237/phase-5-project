import React from "react";
import CostForm from "../containers/CostForm";
import ActivityList from "../containers/ActivityList";
import {Container} from 'react-bootstrap'


function Upload() {
    return (
        <Container>
            <CostForm />
            <ActivityList />
        </Container>
    )
}

export default Upload;