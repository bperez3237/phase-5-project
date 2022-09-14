import {Accordion, ListGroup} from 'react-bootstrap'

function CostList({costs}) {

    const costElements = costs.map((cost)=><ListGroup.Item key={cost.id}>{cost.employee.name} - {cost.hours}</ListGroup.Item>)

    return(
        <Accordion defaultActiveKey={["0"]}>
            <Accordion.Item eventKey='1'>
                <Accordion.Header>Costs:</Accordion.Header>
                <Accordion.Body><ListGroup>{costElements}</ListGroup></Accordion.Body>
            </Accordion.Item>
        </Accordion>

    )
}

export default CostList;