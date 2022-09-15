import { useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ActivitiesContext } from "./context/ActivitiesContext";
import useFetch from '../../hooks/useFetch'


function ActivitiesStatus() {
    const {activities} = useContext(ActivitiesContext)
    const {data} = useFetch('/activity_status')

    console.log(data)

    return(
        <Container>
            <h2>Work Week Hours: {data?.all_hours}</h2>
            <h2>Work Week Cost: {data?.all_costs}</h2>
            <h3>Activities:</h3>
        </Container>)
}

export default ActivitiesStatus;