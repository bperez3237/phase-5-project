import { Container, Row, Col } from "react-bootstrap";
import ActivitiesStatus from "./ActivityStatus";


function Activities({ActivityList}) {


    return(
        <Container>
            <ActivitiesStatus />
            {ActivityList}
        </Container>)
}

export default Activities;