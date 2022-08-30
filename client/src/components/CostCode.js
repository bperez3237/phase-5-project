import {Card} from 'react-bootstrap'

function CostCode({code}) {

    return(
        <Card style={{border:'1px', borderStyle:'solid'}}>
            <Card.Title>{code.code} - {code.name}</Card.Title>
            <Card.Text>Budgted Hours: {code.budget_hours} - Current Hours: {code.current_hours}</Card.Text>
            <Card.Text>Budgeted Quantity: {code.budget_quantity} - Current Quantity: {code.current_quantity}</Card.Text>
        </Card>
        
    )
}

export default CostCode;