import {Card} from 'react-bootstrap'

function CostCode({costCode}) {

    return(
        <Card style={{border:'1px', borderStyle:'solid'}}>
            <Card.Title>{costCode.code} - {costCode.name}</Card.Title>
            <Card.Text>Budgted Hours: {costCode.budget_hours} - Current Hours: {costCode.current_hours}</Card.Text>
            <Card.Text>Budgeted Quantity: {costCode.budget_quantity} - Current Quantity: {costCode.current_quantity}</Card.Text>
            <Card.Text>Budgeted Cost: {costCode.budget_hours*110} - Current Cost: {costCode.current_cost}</Card.Text>
        </Card>
        
    )
}

export default CostCode; 