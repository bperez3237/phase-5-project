import { Container } from "react-bootstrap";
import useFetch from '../../hooks/useFetch'


function ActivitiesStatus() {
    const {data} = useFetch('/activity_status')

    return(
        <Container>
            <h2>Work Week Hours: {data?.all_hours}</h2>
            <h2>Work Week Cost: {data?.all_costs}</h2>
            <h3>Activities:</h3>
        </Container>)
}

export default ActivitiesStatus;